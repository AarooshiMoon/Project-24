class Paper{
    constructor(x,y,width,height){
        var options={
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.height = height;
        this.width = width;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        fill(255);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,20,20);
    }
}