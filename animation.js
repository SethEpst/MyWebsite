var context;
var x=100;
var y=200;
var dx=3;
var dy=3;
var n=0;
var fills=["#D35400", "#76448A", "#2E4053", "#7B241C",
"#85C1E9", "#F1C40F", "#ceeb9a", "#eb9ace", "#9aebb7"];
var crntFill=fills[0+n];

myCanvas.onclick = function() {
	n++;
	crntFill=fills[0+n];
	if (n==8) {
		n=-1;
	}
    var rand = Math.floor(Math.random() * 10) + 1;
    dx = rand;
    dy = rand;
    if(x > 200){x=x-75} else {x=x+75};
    if(y > 150){x=x-75} else {x=x+75};
}

function init() {
	ctx=myCanvas.getContext('2d');
	setInterval(draw,10);
}

function draw() {
	ctx.clearRect(0,0, 400,300);
	ctx.beginPath();
	ctx.arc(x,y,28,0,Math.PI*2,true);
	ctx.closePath();
	ctx.lineWidth=2;
    ctx.strokeStyle="black";
    ctx.stroke();
    ctx.fillStyle=crntFill;
	ctx.fill();
	
	if(x<30||x>370) {
	dx=-dx;
	}
	
	if(y<30||y>270) {
	dy=-dy;
	}
	
	x+=dx;
	y+=dy;
}