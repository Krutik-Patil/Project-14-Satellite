var satelitte, satelitteImg;
var earth, earthImg;
var groundStationLeft, groundStationRight;
var groundStationLeftImg, groundStationRightImg;
var upLinkLeft, upLinkLeftImg;
var upLinkRight, upLinkRightImg;
var downLinkLeft, downLinkLeftImg;
var downLinkRight, downLinkRightImg;

function preload() {
  earthImg = loadAnimation(
    "other/earth1.png",
    "other/earth2.png",
    "other/earth3.png",
    "other/earth4.png",
    "other/earth5.png"
  );
  satelitteImg = loadImage("other/satellite.png");
  groundStationLeftImg = loadImage("other/gstation1.png");
  groundStationRightImg = loadImage("other/gstation2.png");
  upLinkLeftImg = loadAnimation(
    "leftu/upleft1.png",
    "leftu/upleft2.png",
    "leftu/upleft3.png",
    "leftu/upleft4.png",
    "leftu/upleft5.png",
    "leftu/upleft6.png",
    "leftu/upleft7.png",
    "leftu/upleft8.png"
  );

  downLinkLeftImg = loadAnimation(
    "leftd/dleft1.png",
    "leftd/dleft2.png",
    "leftd/dleft3.png",
    "leftd/dleft4.png",
    "leftd/dleft5.png",
    "leftd/dleft6.png",
    "leftd/dleft7.png",
    "leftd/dleft8.png"
  );

  upLinkRightImg = loadAnimation(
    "rightu/upright1.png",
    "rightu/upright2.png",
    "rightu/upright3.png",
    "rightu/upright4.png",
    "rightu/upright5.png",
    "rightu/upright6.png",
    "rightu/upright7.png",
    "rightu/upright8.png"
  );
  downLinkRightImg = loadAnimation(
    "rightd/dright1.png",
    "rightd/dright2.png",
    "rightd/dright3.png",
    "rightd/dright4.png",
    "rightd/dright5.png",
    "rightd/dright6.png",
    "rightd/dright7.png",
    "rightd/dright8.png"
  );
}

function setup() {
  createCanvas(700, 500);

  earth = createSprite(350, 820, 50, 50);
  earth.addAnimation("earth", earthImg);
  earth.scale = 0.6;

  satelitte = createSprite(350, 70, 50, 50);
  satelitte.addImage(satelitteImg);
  satelitte.scale = 0.09;

  groundStationLeft = createSprite(80, 400, 50, 50);
  groundStationLeft.addImage(groundStationLeftImg);
  groundStationLeft.scale = 0.04;

  groundStationRight = createSprite(600, 400, 50, 50);
  groundStationRight.addImage(groundStationRightImg);
  groundStationRight.scale = 0.04;

  upLinkLeft = createSprite(200, 275, 50, 50);
  upLinkLeft.addAnimation("upLinkLeft", upLinkLeftImg);
  upLinkLeft.scale = 0.08;

  downLinkLeft = createSprite(200, 275, 50, 50);
  downLinkLeft.addAnimation("downLinkLeft", downLinkLeftImg);
  downLinkLeft.scale = 0.08;

  upLinkRight = createSprite(495, 275, 50, 50);
  upLinkRight.addAnimation("upLinkRight", upLinkRightImg);
  upLinkRight.scale = 0.08;

  downLinkRight = createSprite(495, 275, 50, 50);
  downLinkRight.addAnimation("downLinkRight", downLinkRightImg);
  downLinkRight.scale = 0.08;
}

function draw() {
  background("black");

  upLinkRight.visible = false;
  downLinkRight.visible = false;
  upLinkLeft.visible = false;
  downLinkLeft.visible = false;

  fill("white");
  text("Press L and R keys", 20, 20);
  text("-to request data from satellite", 20, 40);
  text("Press Left and Right arrow keys", 20, 70);
  text("-to recieve data from satellite", 20, 90);

  textSize(15);
  fill("white");
  if (keyDown("L")) {
    upLinkLeft.visible = true;
    text("Requesting data from satellite", 10, 300);
  }
  if (keyDown("R")) {
    upLinkRight.visible = true;
    text("Requesting data from satellite", 300, 300);
  }
  if (keyDown("LEFT_ARROW")) {
    downLinkLeft.visible = true;
    text("Transferring data to Left Base Station", 10, 300);
  }
  if (keyDown("RIGHT_ARROW")) {
    downLinkRight.visible = true;
    text("Transferring data to Right Base Station", 300, 300);
  }

  drawSprites();
}
