class Ground{
    constructor(x,y,w,h){
        var ground_options={
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,w,h,ground_options)
        this.x = x
        this.y = y
        this.w = w
        this.h = h

        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x, this.body.position.y)
        rectMode(CENTER)
        strokeWeight(4)
        fill('yellow')
        rect(0,0,this.w,this.h)
        pop()
    }
}