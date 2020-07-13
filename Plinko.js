class Plinko{
    constructor(x,y,radius){
     var options ={
         isStatic:false,
         restitution:0.3,
         friction:0.15,
         density:0.15,
     }
 
     this.body = Bodies.circle(x,y,10,options);
     this.radius = 10;     
 
     World.add(world,this.body);
    }
   display(){
    var pos =  this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("white");
    ellipse(0,0,this.radius,this.radius);
    
    pop();
   }
};
