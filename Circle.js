class Circle {
  
    constructor(x, y, radius) {
      // this.x = 0;
      // this.y = 0;
      // this.radius = 30;
      // this.a = a;
      // this.r = r;    
      // this.d = 0;
      this.col = color(25, 114, 120);
      this.j = 0;
      this.radius = radius;
      this.x = x;
      this.y = y;
    }
    
    clicked(){
      this.d = dist(mouseX, mouseY, this.x, this.y);
      if(this.d < 15){
        if(this.j == 0){
        this.col = color(196, 69, 54);
          this.j = 1;
        }else{
          this.col = color(25, 114, 120);
          this.j = 0;
        }
      }
    }
    
    
    show() {
      fill(this.col);
      noStroke();
      circle(this.x, this.y, this.radius);
    
    }
    
    move(){
      // this.x = this.r * sin(this.a);
      // this.y = this.r * cos(this.a);
    }
  }