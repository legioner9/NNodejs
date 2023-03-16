'use strict';

var MAX_VALUE = 10;
console.log('Begin');

for (var i = 0; i < MAX_VALUE; i++) {
  console.dir({
    i: i,
    date: new Date(),
  });
}

console.log('The end');
