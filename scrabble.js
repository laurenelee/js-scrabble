'use strict';
var prompt = require('prompt');
prompt.start();
prompt.get('word', Scrabble.score)


const Scrabble = {

  score: function(word) {
    let score = 0;
    // turn word into an array of characters
    // forEach loop
    // ruby way: 
    // score = 0
    // word.chars.each do |char|
    //   score += LETTER_VALUES[char.downcase]
    // end
    // score += 50 if word.length == 7
    // return score

  }

  // TODO: add the highestScoreFrom method

};


// wave 2:
Scrabble.Player = class {
  // TODO: implement the Player class
};

module.exports = Scrabble;
// where to store the letter value
const LETTER_VALUES = {
  'a' => 1,
  'b' => 3,
  'c' => 3,
  'd' => 2,
  'e' => 1,
  'f' => 4,
  'g' => 2,
  'h' => 4,
  'i' => 1,
  'j' => 8,
  'k' => 5,
  'l' => 1,
  'm' => 3,
  'n' => 1,
  'o' => 1,
  'p' => 3,
  'q' => 10,
  'r' => 1,
  's' => 1,
  't' => 1,
  'u' => 1,
  'v' => 4,
  'w' => 4,
  'x' => 8,
  'y' => 4,
  'z' => 10
}
