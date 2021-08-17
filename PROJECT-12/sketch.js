
var boy, boy_running; 
var track, trackImage;
var invisible_wall1, invisible_wallImage1
var invisible_wall2, invisible_wallImage2

function preload(){
  //pre-load images
trackImage = loadImage ("path.png")
boy_running = loadAnimation ("Runner-1.png", "Runner-2.png")


}

function setup(){
  createCanvas(400,400);
  //create sprites here
  invisible_wall1 = createSprite (10,100,100,800)
  invisible_wall2 = createSprite (400,10,100,800)
  track = createSprite (200,200,800,800)
  track.addImage  ("road", trackImage ); 
  track.scale = 1.2
  track.velocityY = 4
  if (track.y > 400){
    track.y = track.height/2
    }
  boy = createSprite (200,300,20,50)
  boy.addAnimation("running", boy_running ); 
  boy.scale = 0.05

  if (keyDown("left_arrow")){
 boy.x -10
  }
  if (keyDown("right_arrow")){
    boy.x +10
  }
  
 boy.collide (invisible_wall1)
 boy.collide(invisible_wall2)
 
}

function draw() {
  background(0);


  
drawSprites(); 
}
