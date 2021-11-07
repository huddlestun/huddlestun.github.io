var img;
//var img2;
var initials ='meh'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 'black'; // black background

function preload() {
// preload() runs once, it may make you wait
// img = loadImage('demon_eye.jpg');  // demon_eye.png needs to be next to this .js file
// you can link to an image on your github account
img = loadImage('demon_eye.png'); //used for key 7
img2 = loadImage('angel_eye.png'); //used for key 6
img3 = loadImage('redflames.png'); //used for key 4
img4 = loadImage('blueflames.png'); //used for 3
img5 = loadImage('star.png'); //used for key 8
img6 = loadImage('blackstar.png'); //used for key 9
img7 = loadImage('candle.png'); // used for key g
//img=loadImage('https://huddlestun.github.io/diyps2021/demon_eye.png');
//img2= loadImage('https://huddlestun.github.io/diyps2021/angel_eye.png');
//img3= loadImage('https://huddlestun.github.io/diyps2021/redflames.png');
//img4= loadImage('https://huddlestun.github.io/diyps2021/blueflames.png');
//img5= loadImage('https://huddlestun.github.io/diyps2021/star.png');
//img6= loadImage('https://huddlestun.github.io/diyps2021/blackstar.png');
//img7= loadImage('https://huddlestun.github.io/diyps2021/candle.png');
}

function setup() {
createCanvas(600, 400);  // canvas size
background(screenbg);   // use our background screen color
}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   stroke('blue'); //white rays
   fill('black'); //grey fill
   triangle(mouseX, mouseY, 300, 200, pmouseX,pmouseY); //anchored @ center for adjustable radial design
  } else if (toolChoice == '2') { // second tool
   strokeWeight(0.5);
   stroke('red'); //red lines defining rays
   fill('black'); //black fill between red rays
    triangle(mouseX, mouseY, 300, 200, pmouseX,pmouseY); //anchored @ center for adjustable radial design
  } else if (toolChoice == '3') { // third tool

     image(img4, mouseX-25, mouseY-25, 50, 50); //insert blue flames
  } else if (toolChoice == '4') {
      
    image(img3, mouseX-25, mouseY-25, 50, 50); //insert red flames
  } else if (key == '5') { // this tool calls a function
    stroke(0); //set to black
    testbox(200, 500, 20, 0); //set neon green
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {

    image(img2, mouseX-25, mouseY-25, 50, 50); //insert angel eye
  } else if (toolChoice == '7') {
       
    image(img, mouseX-25, mouseY-25, 50, 50); //insert demon eye
  } else if (toolChoice == '8') {

    image(img5, mouseX-25, mouseY-25, 50, 50); //insert white outline star
  } else if (toolChoice == '9') {
    
    image(img6, mouseX-25, mouseY-25, 50, 50); // insert black star filled in
  } else if (toolChoice == '0') { //low opacity black squares brush for shading
    stroke(0, 0, 0, 0); 
    fill(0, 0, 0, 10);
   rect(mouseX, mouseY, 100, 100);
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
   image(img7, mouseX-25, mouseY-25, 50, 50); //insert candle
  } 
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-10, y-10, 20, 20); //set size for key 5 squares

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
     key = ""; // reset the key so that it doesn't keep taking screenshots
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
    filename=initials+day() + hour() + minute() +second();
    saveCanvas(filename, 'jpg');
 // }
}
