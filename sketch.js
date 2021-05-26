var pacMan,G1,G2,G3,G4,P1,P2,P3,P4,P5

var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10

function setup() {
  createCanvas(1000,500);
 pacMan=createSprite(500,200,20,20);

 G1= createSprite(200,300,20,20);
 G2= createSprite(300,100,20,20);
 G3= createSprite(400,400,20,20);
 G4= createSprite(800,150,20,20);

 wall1=createSprite(50,50,8,300);
 wall2=createSprite(50,350,8,240);
 wall3=createSprite(299,475,500,8);
 wall4=createSprite();
 wall5=createSprite();
 wall6=createSprite();
 wall7=createSprite();
 wall8=createSprite();
 wall9=createSprite();
 wall10=createSprite();


}

function draw() {
  background(0);  
  drawSprites();
}