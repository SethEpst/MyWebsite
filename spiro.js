var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var x = 0;
var y = 0;
var R = c.width/2;
var r = 0;
var t = 0;
var p = 0;
var timesRun =0;

// Start Drawing
function startDrawing() {
  t = 0;
  r = $("#r").val();
  p = $("#p").val();
  
  validate();
  if (timesRun != 0) {
    clearCanvas();
  };
  
  // Create a random color
  timesRun = 0;
  var color = '#' + $("#color").val();

  if (color == "#") {
    color = '#'+Math.floor(Math.random()*16777215).toString(16);
  }

  // Initial x and y
  x = R + (R-r)*Math.cos(t) + p*Math.cos(((R-r)/r)*t); // add R to set 0,0 in the middle of the canvas
  y = R + (R-r)*Math.sin(t) - p*Math.sin(((R-r)/r)*t); // add R to set 0,0 in the middle of the canvas

  // Start the Drawing
  
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.moveTo(x,y);

  var xStart = x;
  var yStart = y;

  // Use the timer to create drawing
  interval = setInterval(function() {
    timesRun += 1;
    if(timesRun > 1 && x.toFixed(6) == xStart && y.toFixed(6) == yStart) {
      clearInterval(interval);
    }

    drawSpirograph();
  }, 5); 
    
}

// Draw Spirograph
function drawSpirograph() {
  t += Math.PI/50;
  x = R + (R-r)*Math.cos(t) + p*Math.cos(((R-r)/r)*t); // add R to set 0,0 in the middle of the canvas
  y = R + (R-r)*Math.sin(t) - p*Math.sin(((R-r)/r)*t); // add R to set 0,0 in the middle of the canvas

  ctx.lineTo(x,y);  
  ctx.stroke();
}

// Validate Input Fields
function validate() {
	if (+r >= +R) {
  	alert("r must be less than R");
    exit;
  }

  if (+p >= +r) {
  	alert("p must be less than r");
    exit;
  }
  
  var regex = /^[0-9a-fA-F]{6}$/;
  if (regex.test($(color).val()) == false && $(color).val() != "") {
  alert("color must be 6 digit hex number");
  exit;
  }
}

// Stop Drawing
function stopDrawing() {
	clearInterval(interval);
}

// Clear Canvas
function clearCanvas() {
    clearInterval(interval);
    ctx.clear();
}

CanvasRenderingContext2D.prototype.clear = 
  CanvasRenderingContext2D.prototype.clear || function (preserveTransform) {
    if (preserveTransform) {
      this.save();
      this.setTransform(1, 0, 0, 1, 0, 0);
    }

    this.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (preserveTransform) {
      this.restore();
    }           
};