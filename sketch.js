var x = 0;
var y = 0;
var center = [];
var xSpeed = 10;
var ySpeed = 20;
var color1;
var color2;
var color3;
var color4;
var color5;
var color6;
var color7;
var color8;
var color9;
var color10;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var k = 0;
var j = 0;
var counter = 0;

function setup() {
  createCanvas(600, 600);
  //  frameRate(30);
}

function draw() {
  background(0);
  color1 = color(207, 30, 45, a);
  color2 = color(103, 255, 115, b);
  color3 = color(131, 232, 255, c);
  color4 = color(172, 181, 255, d);
  color5 = color(230, 255, 103, e);
  color6 = color(232, 180, 99, f);
  color7 = color(64, 146, 232, g);
  color8 = color(89, 255, 71, h);
  color9 = color(251, 55, 255, k);
  color10 = color(255, 255, 255, j);
  noStroke();
  if (x > width-20) {
    xSpeed = -xSpeed;
  }
  else if (y > height-20) {
    ySpeed = -ySpeed;
  }
  else if (y < 0) {
    ySpeed = abs(ySpeed);
  }
  else if (x < 0) {
    xSpeed = abs(xSpeed);
  }
  x += xSpeed;
  y += ySpeed;
  var coords = {
    x, y
  }
  center.push(coords);
  if (center.length > 10) {
    center.splice(0, 1);
  }

  for (var i = 0; i < (center.length); i++) {
    // Draw an ellipse for each element in the arrays. 
    // Color and size are tied to the loop's counter: i.
    noStroke();
    fill(30, 207, 186, 80);
    ellipse(center[i].x, center[i].y, 20 + i, 20 + i);
    fill(color1);
    ellipse(center[i].x + 30, center[i].y + 19, 19 + i, 19 + i);
    fill(color2);
    ellipse(center[i].x + 45, center[i].y + 45, 18 + i, 18 + i);
    fill(color3);
    ellipse(center[i].x + 60, center[i].y + 60, 17 + i, 17 + i);
    fill(color4);
    ellipse(center[i].x + 75, center[i].y + 75, 16 + i, 16 + i);
    fill(color5);
    ellipse(center[i].x + 90, center[i].y + 90, 15 + i, 15 + i);
    fill(color6);
    ellipse(center[i].x + 105, center[i].y + 105, 14 + i, 14 + i);
    fill(color7);
    ellipse(center[i].x + 120, center[i].y + 120, 13 + i, 13 + i);
    fill(color8);
    ellipse(center[i].x + 135, center[i].y + 135, 12 + i, 12 + i);
    fill(color9);
    ellipse(center[i].x + 150, center[i].y + 150, 11 + i, 11 + i);
    fill(color10);
    ellipse(center[i].x + 165, center[i].y + 165, 10 + i, 10 + i);
  }
}

function mouseReleased() {
  counter++;
  if (counter % 10 == 1) {
    if (a === 0) {
      a = 80;
    } else {
      a = 0;
    }
  }
  if (counter % 10 == 2) {
    if (b === 0) {
      b = 80;
    } else {
      b = 0;
    }
  }

  if (counter % 10 == 3) {
    if (c === 0) {
      c = 80;
    } else {
      c = 0;
    }

  }
  if (counter % 10 == 4) {
    if (d === 0) {
      d = 80;
    } else {
      d = 0;
    }

  }
  if (counter % 10 == 5) {
    if (e === 0) {
      e = 80;
    } else {
      e = 0;
    }
  }
  if (counter % 10 == 6) {
    if (f === 0) {
      f = 80;
    } else {
      f = 0;
    }
  }
  if (counter % 10 == 7) {
    if (g === 0) {
      g = 80;
    } else {
      g = 0;
    }
  }
  if (counter % 10 == 8) {
    if (h === 0) {
      h = 80;
    } else {
      h = 0;
    }
  }
  if (counter % 10 == 9) {
    if (k === 0) {
      k = 80;
    } else {
      k = 0;
    }
  }
  if (counter % 10 === 0) {
    if (j === 0) {
      j = 80;
    } else {
      j = 0;
    }
  }
}