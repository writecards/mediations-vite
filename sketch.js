//inspired by daniel eden
let slider;
let phase = 0;
let zoff = 0;

let canvas;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  bg = loadImage('clouds.jpeg');
  canvas.style('z-index', '-1')
  canvas.style('margin','0')
  canvas.style('padding','0')
 
  
}

function draw() {
  background(bg);
  push()
    textSize(36)
    fill(255)
    noStroke()
    // text("MEDIATIONS", -115+width/2, 150+height/2)
  pop()
  noFill()
  translate(width/2,height/2);
  let noiseMax = 0.5
  for(let i = 1; i < 5; i++){
  beginShape()
    stroke(255)
    strokeWeight(2)
    for(let a = 0; a < TWO_PI; a+= 0.1){
      let xoff = map(cos(a),-1,1,0,noiseMax);
      let yoff = map(sin(a),-1,1,0,noiseMax)
      let r = map(noise(xoff,yoff,zoff),0,1,1,i*50);
      let x = r*cos(a)
      let y = r*sin(a)
      vertex(x,y);
   
  }
  endShape(CLOSE)
  }
  zoff += 0.001;

  ///noLoop();
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}