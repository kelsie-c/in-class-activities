// music should be an object with title, artist, and album properties
const music = {
  // code here
  title: "Life On Mars",
  artist: "David Bowie",
  album: "Hunky Dory"
};

// Write code between the <div> tags to output the data from the music object above.
// Use an h2 element for the title and a p element for artist and title
const songSnippet = `
  <div class="song">
  My favorite song is ${music.title} by ${music.artist} on his album ${music.album}.
  </div>
`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;