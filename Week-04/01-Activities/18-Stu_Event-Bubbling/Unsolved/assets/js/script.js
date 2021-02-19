// TODO: Which element is the following line of code selecting?
// This is selecting the first element in the class carouselbox which is the div on line 16 of the html
var carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following line of code selecting?
// This is selecting the first element in the cass next which is the button on line 20 of the html
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
// On click, the background image switches to the next url for the image in the array images
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
// moves the image forward by one
next.addEventListener("click", function(event) {
  // TODO: What is the purpose of the following line of code?
  // without this line, the click resonates up a level and automatically takes the user to the url of the image.
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
// moves the image backward by one
prev.addEventListener("click", function(event) {
    // TODO: What would happen if we didn't add the following line of code?
    // without this line, the click resonates up a level and automatically takes the user to the url of the image.
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
