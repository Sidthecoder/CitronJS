//Octagon

window.octagon = function(opts) {
  //Variables
  
  this.opts = opts || {};
  this.strokeStyle = opts.strokeStyle;
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
  this.x6 = opts.x6;
  this.y6 = opts.y6;
  this.x7 = opts.x7;
  this.y7 = opts.y7;
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
  ctx.lineTo(this.x4, this.y4);
  ctx.lineTo(this.x5, this.y5);
  ctx.lineTo(this.x6, this.y6);
  ctx.lineTo(this.x7, this.y7);
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
  else if(!this.x6) {
    console.log(err);
  }
  else if(!this.y6) {
    console.log(err);
  }
  else if(!this.x7) {
    console.log(err);
  }
  else if(!this.y7) {
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
