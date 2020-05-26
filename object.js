class object {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0,
          
          'friction': 0.5,
          'density': 1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.img=loadImage("dustbingreen.png");
   
    
    
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      
      fill(255);
      imageMode(CENTER);
      image(this.img,0, 0, this.width, this.height);
      
    
      pop();
    
    }
}

