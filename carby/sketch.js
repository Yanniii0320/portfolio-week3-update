var mic;
var pos1=0;
var pos2=0;
var song;
let button;
let talking = false;
//let vol = mic.getLevel();

function preload() {
	footl=loadImage('foot1.png')
	foot2=loadImage('foot2.png')
	arml=loadImage('arm1.png')
	arm2=loadImage('arm2.png')
	body=loadImage('body.png')
	face=loadImage('facenomouth.png')
	mouth=loadImage('mouth.png')
  song = loadSound('dog.mp3')
}

function setup(){  
  canvas = createCanvas(windowWidth+50, windowHeight);
  
  canvas.parent("sketch-container");
  button = createButton('TALKING')
  button.position(windowWidth/2-20,0);
  button.mousePressed(TALKING);
  song.play();
  mic = new p5.AudioIn();
  mic.start();
  TALKING();
}
function draw(){
    background(255);
	pos1+=(mouseX-width/2-pos1)/7
	pos2+=(mouseY-height/2-pos2)/7;
	push();
	translate(width/2-535/2,height/2-544/2);
	image(footl,0,0)
	image(foot2,0,0)
	image(body,pos1*0.02,pos2*0.02)
	image(face,pos1*0.08,pos2*0.08-mic.getLevel()*200)
  
	push();
	translate(535/2,pos2*0.08+230-mic.getLevel()*200)
	scale(1,0.1+mic.getLevel()*10);
	image(mouth,pos1*0.08-535/2,-220);
	pop();
  
	push();
	translate(535/2,544/2-5);
	rotate(pos2*0.0002);
	image(arml,pos1*0.02-535/2,pos2*0.02-544/2);
	pop();
  
	push();
	translate(535/2,544/2-5)
	rotate(-pos2*0.0002);
	image(arm2,pos1*0.02-535/2,pos2*0.02-544/2);
	pop();
	fill(255);
	stroke(0);
	pop();
}

function TALKING(){
  song.play();
    button.parent("TALKING-container");
  
  button.addClass("button");
  //button.mousePressed(handleButtonPress);
}


function handleButtonPress(){
  if(!talking){
    talking = true;  
      console.log("Pressed");
    button.html("TALKING");
    button.addClass("inactive");

  }
}

function handleButtonRelease(){
  if(!talking){
    
  }
}