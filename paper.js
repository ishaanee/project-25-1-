class Paper {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density': 1.2
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.img = loadImage("crumpled paper.png");

    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
    
imageMode(CENTER);
image(this.img,0, 0, this.width, this.height);
      fill(255);
     
      pop();
    

    }
  };
  
  


 