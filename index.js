let running = true;

$("#pause").on('click', function(){
  console.log("paused");
  running=!running;
  if(!running){
    resume();
  }
  else{
    pause();
  }

})

$( document ).ready(setup)

// document.addEventListener('visibilitychange', function(){
//   console.log(running);
//   running=!running;
//   if(!running){
//     resume();
//   }
//   else{
//     pause();
//   }
// });

const rippleRes = 768;
let dripping;

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
    let strength = size*.02
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