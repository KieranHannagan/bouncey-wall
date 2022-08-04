 const FPS = 30;
 // ball size
 var bs = 30
 // X and Y position
 var bx, by;
 // X and Y velocity
 var xv, yv;
 var canvas, context;

 // load canvas
 canvas = document.getElementById('gameCanvas');
 context = canvas.getContext('2d');

 // set up interval (game loop)
 setInterval(update, 1000 / FPS);

 // ball starting position 
 bx = canvas.width / 2;
 by = canvas.height / 2;

 // random ball starting speed (between 50 and 100 pps)
 xv = Math.floor(Math.random() * 100 + 75) / FPS
 yv = Math.floor(Math.random() * 100 + 75) / FPS

 // random ball direction
 if (Math.floor(Math.random() * 2) == 0) {
     xv = -xv;
 }
 if (Math.floor(Math.random() * 2) == 0) {
     yv = -yv;
 }

 function update() {
     // move the ball
     // every frame the x-axis velocity will shift this amount
     bx += xv;
     by += yv;

     // wall detection 
     // traveling left
     if (bx - bs / 2 < 0 && xv < 0) {

         xv = -xv
     }
     // traveling right
     if (bx + bs / 2 > canvas.width && xv > 0) {
         xv = -xv
     }
     // traveling upwards
     if (by - bs / 2 < 0 && yv < 0) {
         yv = -yv
     }
     // traveling downwards
     if (by + bs / 2 > canvas.height && yv > 0) {
         yv = -yv
     }

     // draw background and ball
     context.fillStyle = "black";
     context.fillRect(0, 0, canvas.width, canvas.height);
    //  var ball = [bx,by]
    //  ball.getContext('2d');
     context.fillStyle = "yellow";
     context.fillRect(bx - bs / 2, by - bs / 2, bs, bs);

 }