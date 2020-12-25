class redZone{
 constructor(){

    var redZoneOptions ={
        isStaic: true
    }
 
    this.body = bodies.rectangle(x,y,width,height,RedZoneOptions)

    World.add(world, redZone);
}
    display{
    push();
    var pos = this.body.position
    rectMode(CENTRE)
    (pos.x,pos.y,this.width,this.height)
    pop();
    }
}
