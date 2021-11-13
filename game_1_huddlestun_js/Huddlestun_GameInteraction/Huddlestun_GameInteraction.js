function levelFour(){ //start level three
  background(0,100,200);
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
