/*
* CitronJS v0.0.0
* Copyright 2017, Talon Bragg & Shreyas Lad
* https://github.com/CitronJS/CitronJS/
* Free to use under the MIT license.
* https://github.com/CitronJS/CitronJS/blob/master/LICENSE.md
*/

(function(root, factory) {
  /* ======= Global Citron ======= */
  (typeof module === "object" && module.exports) ? module.exports = factory() : root.Citron = factory();
}(this, function() {
    //Global Variables
    
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
        
        //Error Handling
        if(!this.opts) {
    		console.log(err);
    	}
    	else if(!this.xparam) {
    		console.log(err);
    	}
    	else if(!this.yparam) {
    		console.log(err);
    	}
    	else if(!this.wparam) {
    		console.log(err);
    	}
    	else if(!this.hparam) {
    		console.log(err);
    	}
    	else if(!this.fill) {
    		console.log(err);
    	}
    	else if(!this.lineW) {
    		console.log(err);
    	}
    	else if(!this.strokeStyle) {
    		console.log(err);
    	}
    }
    
    
    return Citron;
}));
