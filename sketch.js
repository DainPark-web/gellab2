let circle1, circle2, circle3, circle4, circle5, circle6, circle7, circle8;

let margin = 50;
let song;
let song2;
let song3;
let song4;
let s = 0;
let d = 0;
let f = 0;
let e = 0;
let g = 0;

let k = 0; //dist 1
let sou1 =0; // sont 1

let songOd = 0; //dist 2
let sou2 = 0; //sou 2

let songTd = 0;
let sou3 = 0;

let songThd = 0;
let sou4 = 0;


let extracircle;

function preload(){
  song = loadSound("1.mp3");
  song2 = loadSound("2.mp3");
  song3 = loadSound("3.mp3");
  song4 = loadSound("4.mp3");
}


function setup() {
  createCanvas(700, 700);
  
  circle1 = new Circle(width/2,margin,50);
  circle2 = new Circle(width/2,height-margin,50);
  circle3 = new Circle(margin, height/2,50);
  circle4 = new Circle(width-margin, height/2,50);
  circle5 = new Circle(width/2,height/2,200);

  extracircle = new Extra();
  
  
}

function draw() {
 
  background(237, 221, 212);
  
  stroke(40, 61, 59)
  strokeWeight(3);
  line(margin,height/2,width-margin,height/2);
  line(width/2,margin,width/2,height-margin);
  
  
  circle1.move();
  circle1.show();
  
  circle2.move();
  circle2.show();
  
  circle3.move();
  circle3.show();
  
  circle4.move();
  circle4.show();
  
  circle5.show();
  
  
console.log(e);
  
 
}


function mousePressed(){
  k = dist(mouseX,mouseY,width/2,margin); //song 1
  if(k < 25){
    if(sou1 == 0){
      song.loop();
      sou1 = 1;
    }
    else{
      song.stop();
      sou1 = 0;
    }
  }

  songOd = dist(mouseX,mouseY,width/2,height-margin);
  if(songOd < 25){
    if(sou2 == 0){
      song2.loop();
      sou2 = 1;
    }
    else{
      song2.stop();
      sou2 = 0;
    }
  }

  songTd = dist(mouseX,mouseY,margin, height/2);
  if(songTd < 25){
    if(sou3 == 0){
      song3.loop();
      sou3 = 1;
    }
    else{
      song3.stop();
      sou3 = 0;
    }
  }

  songThd = dist(mouseX,mouseY,width-margin, height/2);
  if(songThd < 25){
    if(sou4 == 0){
      song4.loop();
      sou4 = 1;
    }
    else{
      song4.stop();
      sou4 = 0;
    }
  }
  


    if(s == 0){
      szero();
    }else{
      szero();
      s = 0;
    }
  
  if(d == 0){
      dzero();
    }else{
      dzero();
      d = 0;
    }
  
  if(f == 0){
      fzero();
    }else{
      fzero();
      f = 0;
    }
  
  if(e == 0){
      ezero();
    }else{
      ezero();
      e = 0;
    }
    // circle2.clicked();
    // circle3.clicked();
    // circle4.clicked();
  }

function szero(){
  circle1.clicked();
  s = 1;
}

function dzero(){
  circle2.clicked();
  d = 1;
}

function fzero(){
  circle3.clicked();
  f = 1;
}

function ezero(){
  circle4.clicked();
  e = 1;
}






  


