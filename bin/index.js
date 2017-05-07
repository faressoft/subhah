#!/usr/bin/env node

/**
 * Subhah Counter
 * 
 * @author Mohammad Fares <faressoft.com@gmail.com>
 */

var keypress = require('keypress')
  , chalk    = require('chalk');

var counter  = 0;

/**
 * Print Usage Instructions
 */

/**
 * - Clearing the window
 * - Print the usage instructions
 * - Print the counter
 * 
 */
function render() {

  process.stdout.write('\x1B[2J\x1B[0f\u001b[0;0H');
  console.log('---------------------------------------------------------------');
  console.log('Press', chalk.magenta('ENTER'), 'to increment the counter and', chalk.magenta('BACKSPACE'), 'to reset it');
  console.log('---------------------------------------------------------------');
  console.log(counter);

}

/**
 * When the user press a key
 */

process.stdin.on('keypress', function (ch, key) {

  // The enter key
  if (key.name == 'return') {

    // Increment the counter
    counter++;

    // Render the output
    render();

  }

  // The backspace key
  if (key.name == 'backspace') {

    // Reset the counter
    counter = 0;

    // Render the output
    render();

  }

  // CTRL + C key
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }

});

render();
keypress(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();
