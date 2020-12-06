class Extra{
    constructor(){
        this.angle = 0;
        this.sin = sin(this.angle) * 100;
        this.cos = cos(this.angle) * 100;
    }

    show(){
        circle1(this.sin, this.cos, 50);
    }


}