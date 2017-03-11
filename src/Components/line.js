//Code for Drawing A Line

//Drawing a Line
window.line = function(opts) {
  this.opts = opts || {};
  this.startx = opts.startx;
  this.starty = opts.starty;
  this.endx = opts.endx;
  this.endy = opts.endy;
  this.lineW = opts.lineW;
  this.strokeStyle = opts.strokeStyle;

  ctx.beginPath();
  ctx.strokeStyle = this.strokeStyle;
  ctx.moveTo(this.startx, this.starty);
  ctx.lineWidth = this.lineW;
  ctx.lineTo(this.endx, this.endy);
  ctx.closePath();
  ctx.stroke();

  //Error handling
  if (!this.opts) {
    console.log(err);
  } else if (!this.startx) {
    console.log(err);
  } else if (!this.starty) {
    console.log(err);
  } else if (!this.endx) {
    console.log(err);
  } else if (!this.endy) {
    console.log(err);
  } else if (!this.strokeStyle) {
    console.log(err);
  }

};



