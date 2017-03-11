window.hexagon = function(opts) {
	this.opts = opts || {};
  this.opts = opts || {};
  this.strokeStyle = opts.strokeStyle;
  this.lineW = opts.lineW;
  this.fillStyle = opts.fillStyle;
  this.startx = opts.startx;
  this.starty = opts.starty;
  this.x2 = opts.x2;
  this.y2 = opts.y2;
  this.x3 = opts.x3;
  this.y3 = opts.y3;
  this.x4 = opts.x4;
  this.y4 = opts.y4;
  this.x5 = opts.x5;
  this.y5 = opts.y5;
  this.endx = opts.endx;
  this.endy = opts.endy;
  
  //Drawing
  ctx.beginPath();
  ctx.strokeStyle = this.strokeStyle;
  ctx.moveTo(this.startx, this.starty);
  ctx.lineWidth = this.lineW;
  ctx.fillStyle = this.fillStyle;
  ctx.lineTo(this.x2, this.y2);
  ctx.lineTo(this.x3, this.y3);
  ctx.lineTo(this.x4, this.y4);
  ctx.lineTo(this.x5, this.y5);
  ctx.lineTo(this.endx, this.endy);
  ctx.closePath();
  ctx.stroke();
  
  if(!this.opts) {
  	console.log(err);
  }
  else if(!this.strokeStyle) {
  	console.log(err);
  }
  else if(!this.lineW) {
  	console.log(err);
  }
  else if(!this.fillStyle) {
    console.log(err);
  }
  else if(!this.startx) {
  	console.log(err);
  }
  else if(!this.starty) {
  	console.log(err);
  }
  else if(!this.x2) {
  	console.log(err);
  }
  else if(!this.y2) {
  	console.log(err);
  }
  else if(!this.x3) {
  	console.log(err);
  }
  else if(!this.y3) {
  	console.log(err);
  }
  else if(!this.x4) {
  	console.log(err);
  }
  else if(!this.y4) {
  	console.log(err);
  }
  else if(!this.x5) {
  	console.log(err);
  }
  else if(!this.y5) {
  	console.log(err);
  }
  else if(!this.endx) {
  	console.log(err);
  }
  else if(!this.endy) {
  	console.log(err);
  }
};
