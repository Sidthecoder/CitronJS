//Rectangle code

window.rect = function(opts) {
  this.opts = opts || {};
  this.xparam = opts.xparam;
  this.yparam = opts.yparam;
  this.wparam = opts.wparam;
  this.hparam = opts.hparam;
  this.fill = opts.fill;
  this.lineW = opts.lineW;
  this.strokeStyle = opts.strokeStyle;

  ctx.beginPath();
  ctx.rect(this.xparam, this.yparam, this.wparam, this.hparam);
  ctx.fillStyle = this.fill;
  ctx.fill();
  ctx.lineWidth = this.lineW;
  ctx.strokeStyle = this.strokeStyle;
  ctx.stroke();

  //Error Handling
  if (!this.opts) {
    console.log(err);
  } else if (!this.xparam) {
    console.log(err);
  } else if (!this.yparam) {
    console.log(err);
  } else if (!this.wparam) {
    console.log(err);
  } else if (!this.hparam) {
    console.log(err);
  } else if (!this.fill) {
    console.log(err);
  } else if (!this.lineW) {
    console.log(err);
  } else if (!this.strokeStyle) {
    console.log(err);
  }

};
