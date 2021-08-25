var canvas ;
var ctx;
var x;
var y ;

var ballRadius = 10;
var dx = 2;
var dy = -2; 
var editor;

window.onload = function(){
	canvas = document.getElementById('tutorial');
  ctx = canvas.getContext("2d");
  x = canvas.width/2;
  y = canvas.height-30;
  editor= CodeMirror.fromTextArea(document.getElementById('code'), {
    mode: "javascript",
    lineNumbers: true,
  });
  editor.save()
};

function drawBall() {
  
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  
}
function draw() {
    console.log(editor.getValue());
    var txtAreaCode = editor.getValue();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    if(txtAreaCode =="move()"){
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

// 배경 바닥 만들기 (가로*세로)

// 물건 놓기(물건종류, 개수, 위치정보)

// 소봇놓기(소봇개수, 위치, 방향)


