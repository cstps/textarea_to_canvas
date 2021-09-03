
//전역 변수들
let canvas ;
let ctx;
// Bot의 시작위치
let imgTag = new Image();

let obj ={
  x:0,
  y:0,
  w:10,
  h:10
};

// 1회 이동거리
let dx = 10;
let dy = 10; 
let stopped=10;
// CodeMirror value
let requestId = 0;

let editor;


// 로봇의 시작위치와 크기 정의
let bot={
  x:0,
  y:0,
  w:10,
  h:10,
  d:0
}

window.onload = function(){
  // canvas draw
	canvas = document.getElementById('tutorial');
  ctx = canvas.getContext("2d");

  initBot(bot);

  editor= CodeMirror.fromTextArea(document.getElementById('code'), {
    mode: "javascript",
    lineNumbers: true,
  });
  editor.save()
  drawBot(ctx,bot);
};
// bot init
function initBot(bot){
  bot.x = 0;
  bot.y = canvas.height-10;
  bot.d = 0;
  drawBot(ctx, bot);
}

function drawBot(ctx, bot) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.rect(bot.x,bot.y,obj.w,obj.h);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
  // canvas coordinate draw
  initBot(bot);
  canvas_coordinate_draw(canvas.width, canvas.height);
  console.log(editor.getValue());
  let txtAreaCode = editor.getValue();
  let codeline = txtAreaCode.split("\n");
  console.log(codeline);
  for(let i=0; i<codeline.length;i++){
    cmd(codeline[i]);  
  }
}

function cmd(code){
  switch(code.trim()){
    case "move();":
      if(bot.d==0) bot.x+=10;
      else if(bot.d==1) bot.y-=10;
      else if(bot.d==2) bot.x-=10;
      else bot.y+=10;
      break;
    case "turnLeft();":
      bot.d = (bot.d+1)%4;
    case "setColor();":
    case "getColor();":
    case "putObject();":
  }
   drawBot(ctx,bot);
}


// canvas coordinate draw
function canvas_coordinate_draw(w, h){
  //for(let x = )
}

// 배경 바닥 만들기 (가로*세로)

// 물건 놓기(물건종류, 개수, 위치정보)

// 소봇놓기(소봇개수, 위치, 방향)



var loop = function () {
  if (stopped>0) {
    requestId = requestAnimationFrame(loop);
    // just stepping the object
    obj.x += 1;
    stopped--;
    drawBot(ctx, obj);
  }
  else {
    stop();
  }
};

function stop() {
    if (requestId) {
        window.cancelAnimationFrame(requestId);
    }
}