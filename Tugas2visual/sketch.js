let walker;
let walkers = [];

function setup() {
  createCanvas(400, 400);
  background(220);
  
  u = createVector(150,150);
  v = createVector(100,80);
  w = p5.Vector.sub(v,u)
  
  for (var n = 0; n<1000; n++){
    walkers[n] = new Walker(random(windowWidth), random(windowHeight));
  }
}

function draw() {
  background(220);
  //v = createVector(150,150)
  
  center = createVector(width/2,height/2);
  mouse = createVector(mouseX,mouseY);
  
  w = p5.Vector.sub(mouse,center);
  //ellipse(center.x,center.y,15,15)
  fill('blue')
  ellipse(mouse.x,mouse.y,50,50)
  //rect(mouse.x,mouse.y,10,10)
  //translate(width/2,height/2)
  //line(0,0,w.x,w.y)
  
  for (var n=0; n<1000; n++){
    //walkers[n].show();
    walkers[n].gerakrak();
    walkers[n].cekBatas();
    walkers[n].update();
    walkers[n].show()
  } 
}

class Walker{
  constructor(x,y){
    this.location = createVector(x,y);
    this.velocity = createVector(random(-2,2), random(-2,2));
}
  
show(){
  noStroke();
  fill(255)
  ellipse(this.location.x, this.location.y, 10,10);
}
  
gerakrak(){
    var mouse = createVector(mouseX,mouseY);
    var arahmouse = mouse.sub(this.location);
    
arahmouse.normalize();
arahmouse.mult(2);
this.velocity.add(this.acceleration);
this.velocity.add(this.arahmouse);
this.location.add(this.velocity);
  } 
  
cekBatas(){
  if (this.location.x < 0 || this.location.x > width){
      this.velocity.x = -1*this.velocity.x
    }
  else if(this.location.y < 0 || this.location.y > height){
      this.velocity.y = -1*this.velocity.y
    }
  }
  
  update(){
    var mouse = createVector(mouseX,mouseY);
    var dir = mouse.sub(this.location);
    var topSpeed = 1
    
    dir.normalize();
    dir.mult(0.5);
    
    this.velocity.add(this.acceleration)
    this.velocity.add(dir);
    this.velocity.limit(topSpeed);
    this.location.add(this.velocity);
  }
}