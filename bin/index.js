#!/usr/bin/env node

/**
 * Subhah Counter
 * 
 * @author Mohammad Fares <faressoft.com@gmail.com>
 */

var keypress = require('keypress')
  , counter  = 0;

keypress(process.stdin);

/**
 * When the user press a key
 */
process.stdin.on('keypress', function (ch, key) {

  // The enter key
  if (key.name == 'return') {

    // Clear the window
    process.stdout.write('\x1B[2J\x1B[0f\u001b[0;0H');
    // Increment the counter and print it
    console.log(++counter);

  }

  // The backspace key
  if (key.name == 'backspace') {

    // Clear the window
    process.stdout.write('\x1B[2J\x1B[0f\u001b[0;0H');
    // Reset the counter and print it
    console.log(counter = 0);

  }

  // CTRL + C key
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }

});

process.stdin.setRawMode(true);
process.stdin.resume();
