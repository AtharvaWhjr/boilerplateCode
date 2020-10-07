var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(450,300,50,40);
 movingRect = createSprite(490,370,30,45);

 movingRect.shapeColor = "red";
 fixedRect.shapeColor = "green";
}

function draw() {
  background(0); 
movingRect.x = World.mouseX;
movingRect.y = World.mouseY;
  
if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
   && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
   && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 
   && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
  fixedRect.shapeColor ="yellow";
  movingRect.shapeColor ="yellow";
}

else{
  fixedRect.shapeColor="green";
  movingRect.shapeColor="red";
}

  drawSprites();
}