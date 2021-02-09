var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
constellations.unshift("Canis Major");
console.log(constellations);

constellations.splice(0,0,"Canis Major");
console.log(constellations);

planets.splice(5,1);
console.log(planets);

planets.pop();
console.log(planets);