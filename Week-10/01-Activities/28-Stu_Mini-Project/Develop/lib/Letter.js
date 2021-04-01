class Letter {
  // take a single letter and check if it is alphabet/number
    constructor(char) {
        this.char = char;

        // returns true/false
        this.visible = !/[a-z1-9]/i.test(char);
        
    }
  // show character if above is false
  toString() {
    if (this.visible) {
        return this.char;
    }
    return '_';
  }

  guess(letter) {
      if (this.char === letter) {
          this.visible = true;
          return true;
      } else {
          return false;
      }
  }

  getSolution() {
    return this.char;
  }
}

module.exports = Letter;
