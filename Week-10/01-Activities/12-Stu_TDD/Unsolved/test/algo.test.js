const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
    it("reverses passed string", () => {
      const obj = new Algo().reverse("Hello World!");
      const rev = "!dlroW olleH";

      expect(obj instanceof Algo).toEqual(rev);
    });
  });

  describe("isPalindrome", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
    it("indicates whether the passed string is a palindrome", () => {
      const obj = new Algo.isPalindrome("racecar");

      expect(obj instanceof Algo).toEqual(true);
    });
    
    it("indicates whether the passed string is a palindrome", () => {
      const obj = new Algo().isPalindrome("neon");

      expect(obj instanceof Algo).toEqual(false);
    });
  });

  describe("capitalize", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
    it("makes the first letter of every word uppercase", () => {
      const obj = new Algo().capitalize("capitalize first word");
      const cap = "Capitalize First Word";

      expect(obj instanceof Algo).toEqual(cap);
    });
  });
});