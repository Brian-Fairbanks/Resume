const rippleRes = 768;
let dripping = undefined;

// toggle effect when clicking pause
$("#pause").on('click', toggle)
// and when cycling
document.addEventListener('visibilitychange', function(){
  if(running){toggle}
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

document.addEventListener('scroll', function(e) {
  if (window.scrollY > window.innerHeight) {    // this will mean you also no longer have the ripple effect on screen.  Pause it.
    mast.addClass("mirror-fix");
    pause();
  } else {
    mast.removeClass("mirror-fix");
    if(running){
      resume();
    }

  }
  
});



// Main
$( document ).ready(setup)