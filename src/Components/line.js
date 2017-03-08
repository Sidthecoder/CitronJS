//Code for Drawing A Line

function line(opts) {
		this.opts = opts || {};
		this.startx = opts.startx;
		this.starty = opts.starty;
		this.endx = opts.endx;
		this.endy = opts.endy;
		this.strokeStyle = opts.strokeStyle;
		
		ctx.beginPath();
		ctx.strokeStyle = this.strokeStyle;
		ctx.moveTo(this.startx, this.starty);
		ctx.lineTo(endx, endy);
		
		//Error handling
		if(!this.opts) {
			console.log(err);
		}
		else if(!this.startx) {
			console.log(err);
		}
		else if(!this.starty) {
			console.log(err);
		}
		else if(!this.endx) {
			console.log(err);
		}
		else if(!this.endy) {
			console.log(err);
		}
		else if(!this.strokeStyle) {
			console.log(err);
		}
}



