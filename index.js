$( document ).ready(setup)

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
  let x = Math.random()*screen.width;
  let y = Math.random()*screen.height;
  let size = 20+(Math.random()*30)
  let strength = size*.01
  $('#intro').ripples("drop", x, y, size, strength)
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