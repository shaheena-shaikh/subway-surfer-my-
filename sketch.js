var jake, jake_running, coin, coinImg,coneImg, coin1, counImg1, coin2, coinImg2, bomb, bomb1, bomb2, bombImg, energy, energy1, energy2, energyImg, ground, groundImage, invisibleGround, invisibleGround2, soundBG, power, soundBG2, soundC, powerImg, soundED, soundB;
var gameState = "sound";
var score = 0;
var lifes = 5;

function preload() {
  //pre-load images
  jake_running = loadAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.PNG", "jake5.png");
  groundImage = loadImage("path.png");
  coinImg = loadImage("coin.png");
  bombImg = loadImage("bomb.png")
  soundBG = loadSound("rS.wav");
  soundBG2 = loadSound("background.wav");
  soundC = loadSound("coin.mp3");
  energyImg = loadImage("energyDrink.png");
  powerImg = loadImage("power.png");
  soundED = loadSound("energyD.wav");
  soundB = loadSound("bomb.mp3");
  coneImg = loadImage("cone.jpg")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  ground = createSprite(200, -100);
  ground.addAnimation("path", groundImage);
  ground.scale = 0.9;
  ground.velocityY = 8;
  ground.tint = 'yellow';
  
  coin = createSprite(200, -2000);
  coin.addAnimation("coin", coinImg);
  coin.scale = 0.05;
  coin.velocityY = 10;
  
  coin1 = createSprite(120, -600);
  coin1.addAnimation("coin", coinImg);
 coin1.scale = 0.05;
  coin1.velocityY = 10;
  
  coin2 = createSprite(280, -1000);
  coin2.addAnimation("coin", coinImg);
  coin2.scale = 0.05;
  coin2.velocityY = 10;
  
  jake = createSprite(200,300);
  jake.addAnimation("running", jake_running);
  jake.scale = 0.6;
  
  cone = createSprite(200, -100);
  cone.addAnimation("cone", coneImg);
  cone.scale = 0.05;
  cone.velocityY = 8;
  cone.tint = rgb(255, 0, 0);
  
  cone1 = createSprite(120, -300);
  cone1.addAnimation("cone", coneImg);
  cone1.scale = 0.05;
  cone1.velocityY = 8;
  cone1.tint = rgb(255, 0, 0);

  cone2 = createSprite(280, -400);
  cone2.addAnimation("cone", coneImg);
  cone2.scale = 0.05;
  cone2.velocityY = 8;
  cone2.tint = rgb(255, 0, 0);

  invisibleGround = createSprite(370, 200, 100, 400);
  invisibleGround.visible = false;
  
  invisibleGround2 = createSprite(40, 200, 100, 400);
  invisibleGround2.visible = false;
  
  coin = createSprite(200, 2000);
  coin.addAnimation("coin", coinImg);
  coin.scale = 0.05;
  coin.velocityY = 10;
  
  coin1 = createSprite(120, 600);
  coin1.addAnimation("coin", coinImg);
 coin1.scale = 0.05;
  coin1.velocityY = 10;
  
  coin2 = createSprite(280, 1000);
  coin2.addAnimation("coin", coinImg);
  coin2.scale = 0.05;
  coin2.velocityY = 10;
  
   power = createSprite(25, 200);
   power.addAnimation("power", powerImg);
   power.scale = 0.05;
  
  soundBG.setVolume(0.2);
  soundBG2.setVolume(0.6);
}

function draw() {
  background("white");
  if(ground.y >= 470) {
    ground.y = 5;
  }
  // jake.x = mouseX;
  
  if(coin.y >= 470) {
    coin.y = random(-7000, -6000);
  }
  
  if(coin1.y >= 470) {
    coin1.y = random(-5000, -3000);
  }
  
  if(coin2.y >= 470) {
    coin2.y = random(-9000, -6000);
  }
  
  if(cone.y >= 470) {
    cone.y = random(-1000, -10);
  }
  
  if(cone1.y >= 470) {
    cone1.y = random(-900, -10);
  }
  
  if(cone2.y >= 470) {
    cone2.y = random(-900, -100);
  }
  
  if(coin.y >= 470) {
    coin.y = random(-10000, -8000);
  }
  
  if(coin1.y >= 470) {
    coin1.y = random(-10000, -7000);
  }
  
  if(coin2.y >= 470) {
    coin2.y = random(-9000, -7000);
  }
  
  if(keyDown("left")) {
    jake.x = jake.x-6;
  } else if(keyDown("right")) {
      jake.x = jake.x+6;
  }
  
  if(jake.isTouching(coin)) {
    lifes+=1;
    coin.y = random(-10000, -8000);
    soundED.play();
  }
  
  if(jake.isTouching(coin1)) {
    lifes+=1;
    coin1.y = random(-9000, -7000);
    soundED.play();
  }
  
  if(jake.isTouching(coin2)) {
    lifes+=1;
    coin2.y = random(-10000, -9000);
    soundED.play();
  }
  
  if(jake.isTouching(cone)) {
    lifes-=1;
    cone.y = random(-1000, -10);
    soundB.play();
  }
  
  if(jake.isTouching(cone1)) {
    lifes-=1;
    cone1.y = random(-100, -10);
    soundB.play();
  }
  
  if(jake.isTouching(cone2)) {
    lifes-=1;
    cone2.y = random(-80, -10);
    soundB.play();
  }
  
  if(jake.isTouching(coin)) {
    lifes+=1;
    coin.y = random(-10000, -8000);
    soundED.play();
  }
  
  if(jake.isTouching(coin1)) {
    lifes+=1;
    coin1.y = random(-9000, -7000);
    soundED.play();
  }
  
  if(jake.isTouching(coin2)) {
    lifes+=1;
    coin2.y = random(-10000, -9000);
    soundED.play();
  }
  
  jake.collide(invisibleGround);
  jake.collide(invisibleGround2);
  
  drawSprites();
  
  textSize = 10;
  fill("white");
  text(score, 130, 20);
  text("Score:", 90, 20)
  text(lifes, 299, 20);
  text("Lifes: ", 265, 20);
  
  if(score >= 8) {
    ground.velocityY = 0;
    coin.velocityY = 0;
    coin1.velocityY = 0;
    coin2.velocityY = 0;
    cone.velocityY = 0;
    cone1.velocityY = 0;
    cone2.velocityY = 0;
    coin.velocityY = 0;
    coin1.velocityY = 0;
    coin2.velocityY = 0;    
    jake.pause();
    jake.x = -100;
    jake.y = -100;
    textSize = 100;
    fill("white");
    text("You Won! Refresh the page to restart!", 100, 200);
    soundBG.stop();
    soundBG2.stop();
    
  }
  
  if(lifes <= 0) {
    ground.velocityY = 0;
    coin.velocityY = 0;
    coin1.velocityY = 0;
    coin2.velocityY = 0;
    cone.velocityY = 0;
    cone1.velocityY = 0;
    cone2.velocityY = 0;
    coin.velocityY = 0;
    coin1.velocityY = 0;
    coin2.velocityY = 0;    
    jake.pause();
    jake.x = -100;
    jake.y = -100;
    textSize = 100;
    fill("white");
    text("Game Over! Refresh the page to restart!", 100, 200);
    soundBG.stop();
    soundBG2.stop();
  }
  if(gameState === "sound") {
    soundBG.loop();
    soundBG2.loop();
    gameState = 'mute';
  }
}