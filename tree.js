class Tree{
    constructor(x, y, width, height){
        var options = {
            'isStatic' : true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("PluckingMangoes/tree.png");
        World.add(world, this.body);
    }
    display(){
        var position = this.body.position;

        imageMode(CENTER);
        image(this.image, position.x, position.y, this.width, this.height);
    }
}