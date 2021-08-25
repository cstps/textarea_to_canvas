var canvas ;
var ctx;
var x;
var y ;

var ballRadius = 10;
var dx = 2;
var dy = -2; 

window.onload = function(){
	canvas = document.getElementById('tutorial');
  ctx = canvas.getContext("2d");
  x = canvas.width/2;
  y = canvas.height-30;
};

function drawBall() {
  
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  
}
function draw() {
    var txtAreaCode = document.getElementById('code');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    if(txtAreaCode.value =="move()"){
      if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
          dx = -dx;
      }
      if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
          dy = -dy;
      }
      x += dx;
      y += dy;
    }
    
}