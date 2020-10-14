
class paper {
 
    constructor(x, y, radius) {
      var options = {
          'restitution':0.4,
          'friction':1.5,
          'density':0.14,
          isStatic:false
      }
      this.body = Matter.Bodies.circle(x, y, radius , options);
      this.image = loadImage('paper.png');
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0, 0,this.width,this.height);
      pop();
    }
  };
 