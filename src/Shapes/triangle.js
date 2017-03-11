
/*
	* Triangle
*/
window.triangle = function(opts) {
	//Variables
  this.opts = opts || {};
  this.strokeStyle = opts.strokeStyle;
  this.startx = opts.startx;
  this.starty = opts.starty;
  this.x2 = opts.x2;
  this.y2 = opts.y2;
  this.fill = opts.fill;
  this.lineW = opts.lineW;
  this.endx = opts.endx;
  this.endy = opts.endy;
  this.fillStyle = opts.fillStyle;
  
  //Drawing
  ctx.beginPath();
  ctx.strokeStyle = this.strokeStyle;
  ctx.moveTo(this.startx, this.starty);
  ctx.lineWidth = this.lineW;
  ctx.fillStyle = this.fillStyle;
  ctx.lineTo(this.x2, this.y2);
  ctx.lineTo(this.x3, this.y3);
  ctx.lineTo(this.endx, this.endy);
  ctx.closePath();
  ctx.stroke();
  
  //Error Handling
  if(!this.opts) {
    console.log(err);
  }
  else if(!this.strokeStyle) {
    console.log(err);
  }
  else if(!this.startx) {
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
  else if(!this.fill) {
    console.log(err);
  }
  else if(!this.lineW) {
    console.log(err);
  }
  else if(!this.endx) {
    console.log(err);
  }
  else if(!this.endy) {
    console.log(err);
  }
  else if(!this.fillStyle) {
    console.log(err);
  }
};
