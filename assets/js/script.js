/*
 *  script.js
 *  BallBounce Demo
 *
 *  Created by Kieran Hannagan on Aug 9, 2022
 *  Copyright 2022 Old Red Inc. - All Rights Reserved
 *
 */


// load canvas
let canvas = document.getElementById('gameCanvas');
let context = canvas.getContext('2d');

// game constants
const FPS = 30;                                             // target fps
const PIXPERTICK = 20;                                      // pixels per tick
const VEL = PIXPERTICK;                                     // velocity
const BS = 30;                                              // ball size

const LE = 0 + BS / 2;                                      // left edge
const RE = (canvas.width) - BS / 2;                         // right edge
const TE = 0 + BS / 2;                                      // top edge
const BE = (canvas.height) - BS / 2;                        // bottom edge

let bx, by;                                                 // X and Y position
let xv, yv;                                                 // X and Y velocity

setInterval(update, 1000 / FPS);                            // set up interval (game loop)

bx = canvas.width / 2;                                      // ball starting position 
by = canvas.height / 2;

const STARTANGLE = Math.random() * Math.PI * 2 - Math.PI;      // random ball starting speed (between 200 and 100 pps)
console.log(STARTANGLE);
// the magic number -2.352361043572752


xv = Math.sin(STARTANGLE) * VEL;
yv = Math.cos(STARTANGLE) * VEL;

function update() {
    bx += xv;                                               // every frame the x-axis velocity will shift this amount
    by += yv;                                               // move the ball

    // traveling left
    if (bx < LE) {
        xv = -xv;
    }
    // traveling right
    if (bx > RE) {
        xv = -xv;
    }
    // traveling up
    if (by < TE) {
        yv = -yv;
    }
    // traveling down
    if (by > BE) {
        yv = -yv;
    }

    // draw background and ball
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "#f09";                             // Ball
    context.fillRect(bx - BS / 2, by - BS / 2, BS, BS);     // fillRect(x-starting point, y-starting point, width, height)
}
