class paper
{
constructor(xInput,yInput,radius)
{
var options = {
    isStatic:false,
    restitution:0.2,
    friction:0.5,
    density:1.2,
    angularVelocity:0

}
this.x = xInput;
this.y = yInput;
this.r = radius;
this.body = Bodies.circle(this.x,this.y,this.r/2,options);
World.add(userWorld,this.body);

}
display()
{
var paperpos = this.body.position;

push();
translate(paperpos.x,paperpos.y);
rectMode(CENTER);
strokeWeight(3);
fill(69,69,420);
ellipse(0,0,this.r,this.r)
pop();

}
}