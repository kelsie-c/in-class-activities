const Letter = require("./Letter");

class Word {
  // create an array of letter objects
    constructor(word) {
        this.letters = word.split('').map(char => new Letter(char));
    }
  // if guess is true, returns true
    guessLetter(char) {
        let found = false; 
        this.letters.forEach(letter =>{
            if (letter.guess(char)) {
                found = true;
            }
        })
        return found;
    }
  // if all letters guessed correctly, returns true; or false if at least one letter is incorrect
    guessedCorrectly() {

        return this.letters.every(letter => letter.visible);
        
    }
}

module.exports = Word;
