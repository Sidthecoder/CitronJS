/*
 * CitronJS v0.0.0
 * Copyright 2017, Talon Bragg & Shreyas Lad
 * https://github.com/CitronJS/CitronJS/
 * Free to use under the MIT license.
 * https://github.com/CitronJS/CitronJS/blob/master/LICENSE.md
 */
//Global Variables
	"use strict";

  var err = console.log('There was an error with your code, please open an issue here: https://github.com/CitronJS/CitronJS/issues/new');
  var canvas = document.getElementById('citron');

  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
  }

	var log = function (msg) {
      if (!Citron.config.silent) console.log(msg);
    };

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

  }


  //Elipse Function

  function elipse(opts) {
    this.px = opts.px;
    this.py = opts.py
    this.radius = opts.radius;
    this.pinum = opts.pinum;
    this.fillStyle = opts.fillStyle;
    this.lineW = opts.lineW;
    this.strokeStyle = opts.strokeStyle;

    ctx.beginPath();
    ctx.arc(this.px, this.py, this.radius, 0, this.pinum * Math.PI, false);
    context.fillStyle = this.fillStyle;
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

  }
