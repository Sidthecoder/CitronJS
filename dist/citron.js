/*
* CitronJS v0.0.0
* Copyright 2017, Talon Bragg & Shreyas Lad
* https://github.com/CitronJS/CitronJS/
* Free to use under the MIT license.
* https://github.com/CitronJS/CitronJS/blob/master/LICENSE.md
*/

(function(root, factory) {
  /* ======= Global Moon ======= */
  (typeof module === "object" && module.exports) ? module.exports = factory() : root.Citron = factory();
}(this, function() {
    var err = console.log('There was an error with your code, please open an issue here: https://github.com/CitronJS/CitronJS/issues/new');
    var canvas = document.getElementById('citron');
    
    if (canvas.getContext) {
    	var ctx = canvas.getContext('2d');
    }
    
    /*
     * Main components 
     */
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
     
     
     
     
    
    /*
     * Main Shapes 
     */
    
    //Rectangle Code will go here
    
    
    return Citron;
}));
