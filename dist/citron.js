/*
* CitronJS v0.0.0
* Copyright 2017, Talon Bragg & Shreyas Lad
* https://github.com/CitronJS/CitronJS/
* Free to use under the MIT license.
* https://github.com/CitronJS/CitronJS/blob/master/LICENSE.md
*/

//Global Variables

var err = console.log('There was an error with your code, please open an issue here: https://github.com/CitronJS/CitronJS/issues/new');
var canvas = document.getElementById('citron');

if (canvas.getContext) {
	var ctx = canvas.getContext('2d');
}

//Transpile es6 to es5
const text = function() {
 ctx.font = '14px Comic Sans MS';
 ctx.fillText('This display is made with Citron', 70, 10);
};

//Intro Message on Webpage
window.onload = text;


/*
 * Main components 
 */
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
 
 
 
 

/*
 * Main Shapes 
 */

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


//Pentagon

window.pentagon = function(opts) {
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
  ctx.lineTo(this.endx, this.endy);
  ctx.closePath();
  ctx.stroke();
  
  //Error handling
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


/*
 * Quadrilateral
*/
window.quad = function(opts) {
	//Variables
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
  else if(!this.endx) {
  	console.log(err);
  }
  else if(!this.endy) {
  	console.log(err);
  }
};






