var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
// Append ordered list 
favoriteEl.appendChild(listEl);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

// TODO: Add ordered list items containing four favorite foods
li1.textContent = "Pizza";
listEl.appendChild(li1);

li2.textContent = "Mashed Potatoes";
listEl.appendChild(li2);

li3.textContent = "Sushi";
listEl.appendChild(li3);

li4.textContent = "Lasagna";
listEl.appendChild(li4);

var listBackground = document.querySelector("ol");
listBackground.setAttribute("style", "background-color: #333333; padding: 20px;");

var listItem = document.querySelectorAll("li");

for (let i = 0; i < listItem.length; i++) {
    listItem[i].setAttribute("style", "color: white; padding: 5px; margin-left: 35px;");
    if (i === 0) {
        listItem[0].setAttribute("style", "background-color: green;")
    } else if (i === 1) {
        listItem[1].setAttribute("style", "background-color: blue;")
    } else if (i === 2) {
        listItem[2].setAttribute("style", "background-color: pink;")
    } else if (i === 3) {
        listItem[3].setAttribute("style", "background-color: purple;")
    }
}