let ranInt;

let gridSize=30;

function setup() {
  createCanvas(600, 600);
  let bgColor= color(200,120,230);
  let lineColor= color(122,10,100);
}

function draw() {
  
  if (keyIsPressed === true) {
   background(color(random(200),random(200),random(200)));
   stroke(color(random(200),120,230));
   strokeWeight(6);
    for(let x=0; x<600; x+=gridSize){
      for(let y=0; y<600; y+=gridSize){
          ranInt=random(-1,1);
          if(ranInt<0){
            line(x,y,x+gridSize,y+gridSize);
          }else{
             line(x,y+gridSize,x+gridSize,y);
          }
          
        }
      
    }
}
}


