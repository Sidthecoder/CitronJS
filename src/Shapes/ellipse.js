//Elipse Function

window.ellipse = function(opts) {
  this.opts = opts || {};
  this.px = opts.px;
  this.py = opts.py
  this.radius = opts.radius;
  this.pinum = opts.pinum;
  this.fillStyle = opts.fillStyle;
  this.lineW = opts.lineW;
  this.strokeStyle = opts.strokeStyle;

  ctx.beginPath();
  ctx.arc(this.px, this.py, this.radius, 0, this.pinum * Math.PI, false);
  ctx.fillStyle = this.fillStyle;
  ctx.fill();
  ctx.lineWidth = this.lineW;
  ctx.strokeStyle = this.strokeStyle;
  ctx.stroke();

  //Error Handling
  if (!this.px) {
    console.log(err);
  } else if (!this.py) {
    console.log(err);
  } else if (!this.radius) {
    console.log(err);
  } else if (!this.radius) {
    console.log(err);
  } else if (!this.pinum) {
    console.log(err);
  } else if (!this.fillStyle) {
    console.log(err);
  } else if (!this.lineW) {
    console.log(err);
  } else if (!this.strokeStyle) {
    console.log(err);
  }

};
