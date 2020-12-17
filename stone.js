class Stone{
    constructor(x, y, width, height){
        var options = {
            'isStatic' : false,
            'restitution' : 0,
            'friction' : 1,
            'density' : 1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("PluckingMangoes/stone.png");
        World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        var angle = this.body.angle;

        push();
        translate(position.x, position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}