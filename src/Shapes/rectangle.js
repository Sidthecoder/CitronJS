//Rectangle code

function rect(opts) {
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
	context.fillStyle = this.fill;
    context.fill();
    context.lineWidth = this.lineW;
    context.strokeStyle = this.strokeStyle;
    context.stroke();
}
