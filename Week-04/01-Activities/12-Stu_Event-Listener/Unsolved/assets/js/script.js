var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button
incrementEl.addEventListener("click", function() {
  // If increment is clicked, increase counter by 1
  count ++;
  setCounterText();
});

// TODO: Add event listener to decrement button 
decrementEl.addEventListener("click", function() {
  // If decrement is clicked, decrease counter by 1
  if (count > 0) {
    count --;
    setCounterText();
  }  
});