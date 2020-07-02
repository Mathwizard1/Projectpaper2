class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.005,
            length: 40
        }
        this.pointB = pointB
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48,22,8);
            if(mouseX<pointA.x) {
                strokeWeight(2);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
            }
            else{
                strokeWeight(2);
                line(pointA.x, pointA.y, pointB.x,pointB.y);
            }
            pop();
        }
    }
}