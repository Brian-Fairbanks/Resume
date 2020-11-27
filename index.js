const rippleRes = 768;
let dripping;

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
  dripping = setInterval(drip, 333)
}

// Main
$( document ).ready(setup)