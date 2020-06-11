class Paper {
    constructor() {

      var options = {
          'restitution': 0.3,
          'friction' : 0.5,
          'density':1.2
     
        }
      this.body = Bodies.circle(100,200,25,options);
      this.image = loadImage("paper.png");
      this.radius = 70;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      ellipseMode(RADIUS);
      imageMode(CENTER);
      fill(255,0,255);
      image(this.image,0,0,this.radius,this.radius);
      pop();
      
    }
}

