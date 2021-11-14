var img;
var crystal_back;
var pin;
var penny;
var necklace;
var jewels;
var crown;
var moon;
var sparkle;
var sparkle2;
var crystal;
var crystalback;
var starnight;
var crystal_end;
var ballx = 300; //sets opening ball x orientation (horizontal)
var bally = 300; //sets opening ball y orientation (vertical)
var ballSize = 100; //sets ball size (circle)
var score = 0; //score begins at zero
var gameState = "Title"; //game begins at gamestate L1, the first level

function preload() {
// preload() runs once, it may make you wait
// you can link to an image on your github account
img=loadImage('https://huddlestun.github.io/magpie.png');
crystal_back=loadImage('https://huddlestun.github.io/crystal_back.png');
pin=loadImage('https://huddlestun.github.io/safetypin_true.png');
penny=loadImage('https://huddlestun.github.io/penny.png');
necklace=loadImage('https://huddlestun.github.io/necklace.png');
jewels=loadImage('https://huddlestun.github.io/diamond.png');
crown=loadImage('https://huddlestun.github.io/crown.png');
moon=loadImage('https://huddlestun.github.io/moon.png');
sparkle=loadImage('https://huddlestun.github.io/sparkle.png');
sparkle2=loadImage('https://huddlestun.github.io/spaarkle2.png');
crystal=loadImage('https://huddlestun.github.io/crystal.png');
crystalback=loadImage('https://huddlestun.github.io/crystalbackground.png');
starnight=loadImage('https://huddlestun.github.io/starnight.png');
crystal_end=loadImage('https://huddlestun.github.io/crystal_end.png');
}
function setup() {
  createCanvas(600, 600); //canvas size
  textAlign(CENTER); //aligns all text to center
  textSize(20); //sets all text to 20 font
} //end of setup ============================================================================================================
  
  function draw() {
    
   if(gameState == "Title"){
     background(crystal_back, 255);
   }
   else if(gameState == "L1"){
   background(sparkle, 255); //sets background color, currently light grey
   }
   else if(gameState == "L2"){
     background(sparkle2, 255); 
    }
    else if(gameState == "L3"){
     background(crystal, 255); 
    }
   
    else if(gameState == "L4"){
     background(crystalback, 255); 
     
   }
   else if(gameState == "L5"){
     background(starnight, 200); 
     
   }
   else if(gameState == "Win"){
     background(crystal_end, 200); 
     
   }
   
   
    if(gameState == "Title"){
  TitlePage(); //call title page 
}

  if(gameState == "L1"){
  levelOne(); //call first level 
}
  if(gameState == "L2"){ //name next level and tell what to run when gamestate called
    levelTwo(); //call second level
  }
  if(gameState == "L3"){ //name next level and tell what to run when gamestate called
    levelThree(); //call third level
  }
  if(gameState == "L4"){
    levelFour();
  }
  if(gameState == "L5"){
    levelFive();
  }
  if(gameState == "Win"){ //name last window and tell what to run when gamestate called
  WinPage(); //call final winner page
  }
  
  if(gameState == "Bonus1"){
    Bonus1();
  }
  
  if(gameState == "Bonus2"){
    Bonus2();
  }
  
  if (mouseX < 50 && mouseY < 50) {
    cursor('https://huddlestun.github.io/magpie_cursor.png', 50, 20);
  }
  
  text(("Score: " + score),width/2,40); //text for score will add one point to starting number (0), sets width of score insert
} //end of draw ==============================================================================================================

function TitlePage(){ //start title page
text("Ooh, shiny! Find and toggle over the safety pin to begin", width/2,height-20,); //names level one, text orientation center near bottom
fill(255);
  var distToBall = dist(ballx,bally, mouseX,mouseY); //provides distance definition when "distToBall" is referenced
  if(distToBall < ballSize/2){ //directions for ball to move relative to closeness of mouse to ball
     gameState = "L1";
   }
   
  image(pin,ballx,bally, ballSize, ballSize); //draw circle (this is the ball) to fit the dimensions established as var at top of code page
  
} // end of title page =========================================================================================================================================
function levelOne(){ //start level one
  text("Level 1", width/2,height-20); //names level one, text orientation center near bottom
  var distToBall = dist(ballx,bally, mouseX,mouseY); //provides distance definition when "distToBall" is referenced
  if(distToBall < ballSize/2){ //directions for ball to move relative to closeness of mouse to ball
   ballx = random(width); //move to random place on x axis
   bally = random(height); //move to random place on y axis
    score = score + 1; //tally an extra score point every time this happens
   }
   if(score>= 10){ //establishes transition to next level at greater than five points (ie next level starts at six)
     gameState = "L2";
     //fill(random(255));
   }
   
  image(penny,ballx,bally, ballSize, ballSize); //draw circle (this is the ball) to fit the dimensions established as var at top of code page
  
} // end of level 1 =========================================================================================================================================

function levelTwo(){ //start level two
  text("Level 2", width/2,height-20); //names level two, text orientation center near bottom
  var distToBall = dist(ballx,bally,mouseX,mouseY); //provides distance definition when "distToBall" is referenced
  if(distToBall < ballSize/2){ //directions for ball to move relative to closeness of mouse to ball
   ballx = random(width); //move to random place on x axis
   bally = random(height); //move to random place on y axis
    score = score + 1; //tally an extra score point every time this happens
   }
   if(score>= 20){ //establishes transition to next level at greater than ten points (ie next level starts at six)
    gameState = "L3";
    // fill(random(255)); //when score>5 background color will randomly flash different greyscale values **epilepsy warning**
   }
   
 image(necklace,ballx,bally, ballSize, ballSize); //draw circle (this is the ball) to fit the dimensions established as var at top of code page
  
} // end of level 2 =========================================================================================================================================

function levelThree(){ //start level three
  text("Level 3", width/2,height-20); //names level three, text orientation center near bottom
  var distToBall = dist(ballx,bally,mouseX,mouseY); //provides distance definition when "distToBall" is referenced
  if(distToBall < ballSize/2){ //directions for ball to move relative to closeness of mouse to ball
   ballx = random(width); //move to random place on x axis
   bally = random(height); //move to random place on y axis
   score = score + 1; //tally an extra score point every time this happens
  // ballSize = ballSize - 5; //ball size will decrease by one each time the mouse interacts within the specified radius
 }
   
   if(score>= 30){ //establishes transition to next level at greater than ten points (ie next level starts at six)
    gameState = "L4";
    // fill(random(255)); //when score>5 background color will randomly flash different greyscale values **epilepsy warning**
   } //background(random(255)); //sets background to flash random blocks of greyscale color **epilepsy warning**
     
  image(jewels,ballx,bally, ballSize, ballSize); //draw circle (this is the ball) to fit the dimensions established as var at top of code page

} // end of level 3 =========================================================================================================================================

function levelFour(){ //start level four
  text("Level 4", width/2,height-20); //names level four, text orientation center near bottom
  var distToBall = dist(ballx,bally,mouseX,mouseY); //provides distance definition when "distToBall" is referenced
  if(distToBall < ballSize/2){ //directions for ball to move relative to closeness of mouse to ball
   ballx = random(width); //move to random place on x axis
   bally = random(height); //move to random place on y axis
   score = score + 1; //tally an extra score point every time this happens
   ballSize = ballSize - 5; //ball size will decrease by one each time the mouse interacts within the specified radius
 }
   
   if(score>= 40){ //establishes transition to next level at greater than ten points (ie next level starts at six)
    gameState = "L5";
    // fill(random(255)); //when score>5 background color will randomly flash different greyscale values **epilepsy warning**
   } //background(random(255)); //sets background to flash random blocks of greyscale color **epilepsy warning**
     
  image(crown,ballx,bally, ballSize, ballSize); //draw circle (this is the ball) to fit the dimensions established as var at top of code page

} // end of level 4 =========================================================================================================================================

function levelFive(){ //start level five
  text("Level 5", width/2,height-20); //names level four, text orientation center near bottom
  var distToBall = dist(ballx,bally,mouseX,mouseY); //provides distance definition when "distToBall" is referenced
  if(distToBall < ballSize/2){ //directions for ball to move relative to closeness of mouse to ball
   ballx = random(width); //move to random place on x axis
   bally = random(height); //move to random place on y axis
   score = score + 1; //tally an extra score point every time this happens
   ballSize = ballSize - 5; //ball size will decrease by one each time the mouse interacts within the specified radius
  }
   
   if(score>= 50){ //establishes transition to next level at greater than fifty points (ie next level starts at fifty one)
    gameState = "Win";
    // fill(random(255)); //when score>5 background color will randomly flash different greyscale values **epilepsy warning**
   } //background(random(255)); //sets background to flash random blocks of greyscale color **epilepsy warning**
     
  image(moon,ballx,bally, ballSize, ballSize); //draw circle (this is the ball) to fit the dimensions established as var at top of code page

} // end of level 5 =========================================================================================================================================

function WinPage(){ //start win page
text("Winner! You stole the shinest prize- the moon!", width/2,height-20,); //names level one, text orientation center near bottom
fill(255);
  
} // end of title page =========================================================================================================================================
