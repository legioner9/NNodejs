'use strict';

var INTERVAL = 500;
var MAX_VALUE = 10;
var counter = 0;
var timer = null;

var event = function event() {
  if (counter === MAX_VALUE) {
    console.log('The end');
    clearInterval(timer);
    return;
  }

  console.dir({
    counter: counter,
    date: new Date()
  });
  counter++;
};

console.log("Begin");
timer = setInterval(event, INTERVAL);