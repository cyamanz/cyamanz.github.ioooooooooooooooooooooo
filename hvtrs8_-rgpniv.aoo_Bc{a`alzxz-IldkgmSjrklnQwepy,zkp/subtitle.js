// script to generate random greetings

function changeSub(num) {
  document.getElementById("subtitle").innerText = say[num];
}

var say = [
  "Update V2",
  "Better than Mw2 Season 3??",
  "Make The Voices Stop",
  "Joe was here",
  "They're Coming",
  "Go Outside!",
  "I forgot to pay my taxes",
  "Infray was here",
  "Walmart is the best amusement park",
  "The Superior UBG Site",
  "Request games at irunblocked.com/request",
  "Don't be stupid!1!1!!1",
  "Bookmark the site!",
  "I Ran With Scissors, And Lived!",
  "In Soviet Russia, Games Play You!",
  "UUUUgggggghHHhHhhghg",
  "Free Parachute: Used Once, Never Opened",
  "i run blocked??",
  "Do you even code bro?",
  "rubrub",
  "Now with Nuclear Capabilities!",
];
console.log("[INFO] " + say.length + " splash texts were loaded!")
// pick a random greeting
var howmany = say.length;
var bRand = 0;
bRand = Math.random();
bRand = Math.floor(bRand * howmany);
sayWhat = say[bRand];
document.getElementById("subtitle").innerText = sayWhat;

function changeSplash(num) {
  document.getElementById("subtitle").innerText = say[num];
  var ret = "Set current splash to splash " + num + ", " + say[num];
  return ret;
}
// Get the paragraph element by ID
var startMenu = document.getElementById("start-menu");
