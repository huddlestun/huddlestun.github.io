var img;
var ballx = 300; //sets opening ball x orientation (horizontal)
var bally = 300; //sets opening ball y orientation (vertical)
var ballSize = 200; //sets ball size (circle)
var score = 0; //score begins at zero
var gameState = "L1"; //game begins at gamestate L1, the first level

function preload() {
// preload() runs once, it may make you wait
// you can link to an image on your github account
img=loadImage('https://huddlestun.github.io/magpie.png');
}
function setup() {
  createCanvas(600, 600); //canvas size
  textAlign(CENTER); //aligns all text to center
  textSize(20); //sets all text to 20 font
} //end of setup ============================================================================================================
  
  function draw() {
  background(220); //sets background color, currently light grey
  if(gameState == "L1"){
  levelOne(); //call first level 
}
  if(gameState == "L2"){ //name next level and tell what to run when gamestate called
    levelTwo(); //call second level
  }
  if(gameState == "L3"){ //name next level and tell what to run when gamestate called
    levelThree(); //call third level
  }
  if(gameState == "Win"){ //name last window and tell what to run when gamestate called
  WinPage(); //call final winner page
  }
  
  text(("Score: " + score),width/2,40); //text for score will add one point to starting number (0), sets width of score insert
} //end of draw ==============================================================================================================

function levelOne(){ //start level one
  text("Level 1", width/2,height-20); //names level one, text orientation center near bottom
  var distToBall = dist(ballx,bally,mouseX,mouseY); //provides distance definition when "distToBall" is referenced
  if(distToBall < ballSize/2){ //directions for ball to move relative to closeness of mouse to ball
   ballx = random(width); //move to random place on x axis
   bally = random(height); //move to random place on y axis
    score = score + 1; //tally an extra score point every time this happens
   }
   if(score>= 5){ //establishes transition to next level at greater than five points (ie next level starts at six)
     gameState = "L2";
     //fill(random(255));
   }
   
  image(img,ballx,bally, ballSize, ballSize); //draw circle (this is the ball) to fit the dimensions established as var at top of code page
  line(ballx,bally,mouseX,mouseY); //draw line over ball connecting mouse to ball's center, helps with ease at early rounds, shows mouse-ball directionality
  
} // end of level 1 =========================================================================================================================================

function levelTwo(){ //start level two
  background(200,100,0);
  text("Level 2", width/2,height-20); //names level two, text orientation center near bottom
  var distToBall = dist(ballx,bally,mouseX,mouseY); //provides distance definition when "distToBall" is referenced
  if(distToBall < ballSize/2){ //directions for ball to move relative to closeness of mouse to ball
   ballx = random(width); //move to random place on x axis
   bally = random(height); //move to random place on y axis
    score = score + 1; //tally an extra score point every time this happens
   }
   if(score>= 10){ //establishes transition to next level at greater than ten points (ie next level starts at six)
    gameState = "L3";
    // fill(random(255)); //when score>5 background color will randomly flash different greyscale values **epilepsy warning**
   }
   
  ellipse(ballx,bally, ballSize, ballSize); //draw circle (this is the ball) to fit the dimensions established as var at top of code page
  
} // end of level 2 =========================================================================================================================================

function levelThree(){ //start level three
  background(0,100,200);
  text("Level 3", width/2,height-20); //names level three, text orientation center near bottom
  var distToBall = dist(ballx,bally,mouseX,mouseY); //provides distance definition when "distToBall" is referenced
  if(distToBall < ballSize/2){ //directions for ball to move relative to closeness of mouse to ball
   ballx = random(width); //move to random place on x axis
   bally = random(height); //move to random place on y axis
   score = score + 1; //tally an extra score point every time this happens
   ballSize = ballSize - 1; //ball size will decrease by one each time the mouse interacts within the specified radius
 }
   
   if(score>= 50){ //establishes transition to next level at greater than ten points (ie next level starts at six)
    gameState = "Win";
    // fill(random(255)); //when score>5 background color will randomly flash different greyscale values **epilepsy warning**
   } //background(random(255)); //sets background to flash random blocks of greyscale color **epilepsy warning**
     
   ellipse(ballx,bally, ballSize, ballSize); //draw circle (this is the ball) to fit the dimensions established as var at top of code page

} // end of level 3 =========================================================================================================================================

function WinPage(){ //start win page
  background(255,0,0);
  text("Winner!", width/2,height-20); //names win page, text orientation center near bottom
 
} //end winner screen ===========================================================================================================================
