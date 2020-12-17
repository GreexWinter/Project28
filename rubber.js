class Rubber{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.rubber = Constraint.create(options);
        World.add(world, this.rubber);
        this.pointB = pointB;
    }

    display(){
        if(this.rubber.bodyA){
            var pointA = this.rubber.bodyA.position;
            strokeWeight(4);
            line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
        }
    }
    detach(){
        this.rubber.bodyA = null;
    }    
    attach(){
        this.rubber.bodyA = body;
    }
}
