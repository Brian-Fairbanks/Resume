const rippleRes = 768;
let dripping = undefined;

// toggle effect when clicking pause
$("#pause").on('click', toggle)
// and when cycling
document.addEventListener('visibilitychange', function(){
  if(visualViewport==false){
    pause();
  }
  else {
    if(running){
      resume();
    }
  }
})

// ripple effect tobble play/pause
let running = true;
function toggle(){
    console.log("paused");
    if(!running){
      resume();
    }
    else{
      pause();
    }
    running=!running;
}

function setup(){
  // set up ripple effect
  $("#intro").ripples({
    resolution: rippleRes,
    perturbance: 0.06,
    dropRadius: 20,
  });

  resume();
}

// Helper Functions
function drip(){
  let dripcount = 1+Math.floor(Math.random()*3)

  for (x=0; x<dripcount; x++){
    let x = Math.random()*screen.width;
    let y = Math.random()*screen.height;
    let size = 5+(Math.random()*10)
    let strength = size*.002
    $('#intro').ripples("drop", x, y, size, strength)
  }

}

function pause(){
  $("#intro").ripples("pause");
  // set up timer to run the ripple effect on
  clearInterval(dripping);
  dripping=undefined;
}

function resume(){
  $("#intro").ripples("play");
  // set up timer to run the ripple effect on
  // if to ensure it only happens once.
  if(!dripping){dripping = setInterval(drip, 333)};
}




/*
================================================
|
|   Scroll and Stick
|
================================================
*/
var mast = $("#mirror");

let navPosition = window.scrollY;
let skillsSection = $("#skills").offset().top-250;
let projectsSection = $("#projects").offset().top-250;
let expSection = $("#experience").offset().top-250;
let resumeSection = $("#resume").offset().top-250;


document.addEventListener('scroll', function(e) {
  navPosition = window.scrollY;

  
  if (navPosition > window.innerHeight) { // if you are past the main intro...
    // pin the nav bar to the top of the screen
    mast.addClass("mirror-fix");
    // this will mean you also no longer have the ripple effect on screen.  Pause it.
    pause();

    // Highlights current page
    if(navPosition > resumeSection){
      $(".nav-item").removeClass("active");
      $("#nav-resume").addClass("active");
    }
    else if(navPosition > expSection){
      $(".nav-item").removeClass("active");
      $("#nav-experience").addClass("active");
    }
    else if(navPosition > projectsSection){
      $(".nav-item").removeClass("active");
      $("#nav-projects").addClass("active");
    }
    else if(navPosition > skillsSection){
      $(".nav-item").removeClass("active");
      $("#nav-skills").addClass("active");
    }
  }
  // when the main intro is on screen...
  else {
    // let the nav bar stick under the intro
    mast.removeClass("mirror-fix");
    $(".nav-item").removeClass("active");
    // and resume the ripple effect if it is not manually paused
    if(running){
      resume();
    }

  }


  
});


function getSectionPos(){
  navPosition = window.scrollY;
  skillsSection = $("#skills").offset().top;
  projectsSection = $("#projects").offset().top;
  expSection = $("#experience").offset().top;
  resumeSection = $("#resume").offset().top;
}



// Main
$( document ).ready(setup)