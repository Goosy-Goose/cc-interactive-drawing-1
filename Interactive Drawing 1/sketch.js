//rbg shown value
var Rval;
var Gval;
var Bval;
//rbg increase or decrease
var Rdeorin;
var Gdeorin;
var Bdeorin;
//rgb change rate
var Rchangerate;
var Gchangerate;
var Bchangerate;
//shape and size of cursor
var shape;//1->circle, 2->square, 3->thin rect, 4->triangle
var size;
//background color
var BGr;
var BGg;
var BGb;
//whether the color is frozen
var frozen;


//SETUP FUNCTION
function setup() {
  createCanvas(900, 500);
  noStroke();
  BGr = 193;
  BGg = 224;
  BGb = 180
  background(BGr, BGg, BGb);
  Rval = random(0, 225);//random starting rgb values
  Gval = random(0, 225);
  Bval = random(0, 225);
  Rdeorin = random(); //randomly select initial increase or decrease
  Gdeorin = random();
  Bdeorin = random();
  Rchangerate = random(0,5); //randomly decide the change rate
  Gchangerate = random(0,5);
  Bchangerate = random(0,5);
  shape = 1;
  size = 40;
  frozen = false;
}//END SETUP


//DRAW FUNCTION
function draw() {
  if(frozen){
    fill(Rval, Gval, Bval);
  }else{
    fill(rgbDisplayVal("r"), rgbDisplayVal("g"), rgbDisplayVal("b"));
  }
  cursorDisplay();  
}//END DRAW



function mouseDragged(event){
  cursorShape(mouseX, mouseY, size, shape);
}




function cursorDisplay(){
  if(shape === 1){
    ellipse(size/2, size/2, size);
  }
  if(shape === 2){
    rect(0,0,size);
  }
  if(shape === 3){
    rect(0,0, size*0.6, size);
  }
  if(shape === 4){
    triangle((size/3)*sqrt(3), 0, 0, size, 2*(size/3)*sqrt(3), size);
  }
}


function cursorShape(mX, mY, cursorsize, sh){
  if(sh === 1){
    ellipse(mX, mY, cursorsize);
  }else if (sh === 2){
    rect(mX - (cursorsize/2), mY - (cursorsize/2), cursorsize);
  }else if(sh === 3){
    rect(mX - ((cursorsize*0.6)/2), mY - (cursorsize/2), cursorsize*0.6, cursorsize);
  }else if(sh === 4){
    triangle(mX, mY - cursorsize/2, mX - ((cursorsize/3)*sqrt(3)), mY + cursorsize/2, mX + ((cursorsize/3)*sqrt(3)), mY + cursorsize/2);
  }
}




function rgbDisplayVal(rgb){
  let nextRGBVal
  if(rgb === "r"){ 
    nextRGBVal = checkNextRGBVal("r");
    if(nextRGBVal >=255 || nextRGBVal <= 0){ //check if next RGB value is out-of bounds
      changeDirection("r");
      Rval = checkNextRGBVal("r");
      return Rval;
    } else{
      Rval = nextRGBVal;
      return Rval;
    }
  }
  if(rgb === "g"){ 
    nextRGBVal = checkNextRGBVal("g");
    if(nextRGBVal >=255 || nextRGBVal <= 0){
      changeDirection("g");
      Gval = checkNextRGBVal("g");
      return Gval;
    } else{
      Gval = nextRGBVal;
      return Gval;
    }
  }
  if(rgb === "b"){ 
    nextRGBVal = checkNextRGBVal("b");
    if(nextRGBVal >=255 || nextRGBVal <= 0){
      changeDirection("b");
      Bval = checkNextRGBVal("b");
      return Bval;
    } else{
      Bval = nextRGBVal;
      return Bval;
    }
  }
}

function checkNextRGBVal(rgb){
  if(rgb === "r"){
    if(Rdeorin<0.5){
      return Rval - random()*Rchangerate;
    }else{
      return Rval + random()*Rchangerate;
    }
  }
  if(rgb === "g"){
    if(Gdeorin<0.5){
      return Gval - random()*Gchangerate;
    }else{
      return Gval + random()*Gchangerate;
    }
  }
  if(rgb === "b"){
    if(Bdeorin<0.5){
      return Bval - random()*Bchangerate;
    }else{
      return Bval + random()*Bchangerate;
    }
  }
}


function changeDirection(rgb){
  if(rgb === "r"){
    if(Rdeorin < 0.5){
      Rdeorin = 1;
    } else{
      Rdeorin = 0;
    }
  }
  if(rgb === "g"){
    if(Gdeorin < 0.5){
      Gdeorin = 1;
    } else{
      Gdeorin = 0;
    }
  }
  if(rgb === "b"){
    if(Bdeorin < 0.5){
      Bdeorin = 1;
    } else{
      Bdeorin = 0;
    }
  }
}


function clearPreviousShape(){
  if(shape === 1){
    fill(BGr, BGg, BGb);
    ellipse((size)/2, (size)/2, size);
  }
  if(shape === 2){
    fill(BGr, BGg, BGb);
    rect(0,0,size);
  }
  if(shape === 3){
    fill(BGr, BGg, BGb);
    rect(0,0, (size)*0.6, size);
  }
  if(shape === 4){
    fill(BGr, BGg, BGb);
    triangle(((size)/3)*sqrt(3), 0, 0, size , 2*((size)/3)*sqrt(3), size);
  }
}


function clearSmallCursor(){
  if(shape === 1){
    fill(BGr, BGg, BGb);
    ellipse((size-5)/2, (size-5)/2, size-4);
  }
  if(shape === 4){
    fill(BGr, BGg, BGb);
    triangle(((size-6)/3)*sqrt(3), 0, 0, size-6 , 2*((size-6)/3)*sqrt(3), size-6);
  }
}


function clearBigCursor(){
  if(shape === 1){
    fill(BGr, BGg, BGb);
    ellipse((size+5)/2, (size+5)/2, size+6);
  }
  if(shape === 2){
    fill(BGr, BGg, BGb);
    rect(0,0,size+6);
  }
  if(shape === 3){
    fill(BGr, BGg, BGb);
    rect(0,0, (size+5)*0.6, size+6);
  }
  if(shape === 4){
    fill(BGr, BGg, BGb);
    triangle(((size+6)/3)*sqrt(3), 0, 0, size+6 , 2*((size+6)/3)*sqrt(3), size+6);
  }
}






function keyTyped(){
  if(key === 'c'){ //if "c" is pressed to change cursor
    clearPreviousShape();
    let s = shape += 1;
    if(s <= 4){
      shape = s;
    }else{
      shape = 1;
    }
  }
  if(key === 'b'){
    BGr = floor(random(0,226))
    BGg = floor(random(0,226))
    BGb = floor(random(0,226))
    background(BGr, BGg, BGb);
  }
  if(key === 'f'){
    frozen = true;
  }
  if(key === 'u'){
    frozen = false;
  }
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    
    if(size < 90){
      size +=5;
    }
    clearSmallCursor();
  }
  if(keyCode === DOWN_ARROW){
    
    if(size >= 15){
      size -= 5;
    }
    clearBigCursor();
  }
}