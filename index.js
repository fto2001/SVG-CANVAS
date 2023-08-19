// SUN

const sun = document.getElementById('sun');
const ctxSun = sun.getContext('2d');

ctxSun.strokeStyle = 'yellow';
ctxSun.lineWidth = 3;

// Circle

ctxSun.arc(100,100,40,0, 2 * Math.PI);
ctxSun.fillStyle = 'yellow';
ctxSun.fill();

// DrawLine

function drawLine(x1,y1,x2,y2) {
    ctxSun.moveTo(x1, y1);
    ctxSun.lineTo(x2, y2);
    ctxSun.stroke();
}

drawLine(100, 60, 100, 20);
drawLine(100, 140, 100, 180);
drawLine(60, 100, 20, 100);
drawLine(140, 100, 180, 100);
drawLine(72, 72, 44, 44);
drawLine(128, 72, 156, 44);
drawLine(72, 128, 44, 156);
drawLine(128, 128, 156, 156);

// CLOUD

const cloud = document.getElementById('cloud');
const ctxCloud = cloud.getContext('2d');

ctxCloud.fillStyle = 'blue';

function drawCircle(cx, cy, r) {
    ctxCloud.arc(cx, cy, r, 0, 2 * Math.PI);
    ctxCloud.fill();
  }

drawCircle(35, 100, 25);
drawCircle(65, 95, 30);
drawCircle(95, 100, 25);
drawCircle(125, 95, 30);
drawCircle(155, 100, 25);

// TREE

const tree = document.getElementById('tree');
const ctxTree = tree.getContext('2d');

// Body

ctxTree.fillStyle = 'brown';
ctxTree.fillRect(100,80,30,100)
ctxTree.fill();

// Ground

ctxTree.strokeStyle = 'black'
ctxTree.lineWidth = 3;
ctxTree.moveTo(70,180);
ctxTree.lineTo(160,180);
ctxTree.stroke();

// Leafs

function drawLeafsForTree(cx,cy,r) {
    ctxTree.fillStyle = 'green';
    ctxTree.beginPath();
    ctxTree.arc(cx, cy, r, 0, 2 * Math.PI);
    ctxTree.fill();
}

drawLeafsForTree(70,85,40);
drawLeafsForTree(115,60,50);
drawLeafsForTree(160,85,40);

// BIRD 

const bird = document.getElementById('bird');
const ctxBird = bird.getContext('2d');

// Circles for bird 

function circleForBird(cx, cy, r, color) {
    ctxBird.fillStyle = color;
    ctxBird.beginPath();
    ctxBird.arc(cx, cy, r, 0, 2 * Math.PI);
    ctxBird.fill();
}

circleForBird(150,100,50, 'grey');
circleForBird(200,50,40, 'lightgrey');
circleForBird(215,40,10, 'brown');
circleForBird(215,40,4, 'lightblue');

// Lines for Bird

function lineForBird(x1, y1, x2, y2, strokeColor, lineWidth) {
    ctxBird.strokeStyle = strokeColor;
    ctxBird.lineWidth = lineWidth;
    ctxBird.beginPath();
    ctxBird.moveTo(x1, y1);
    ctxBird.lineTo(x2, y2);
    ctxBird.stroke();
}

lineForBird(270,40,239,40, 'brown', 3);
lineForBird(270,40,239,50, 'brown', 3);
lineForBird(130,55,70,30, 'brown', 3);
lineForBird(110,70,70,30, 'brown', 3);
lineForBird(125,140,105,180, 'grey', 3);
lineForBird(200,180,160,130, 'grey', 3);
lineForBird(105,180,90,190, 'yellow', 2);
lineForBird(105,180,105,200, 'yellow', 2);
lineForBird(105,180,120,190, 'yellow', 2);
lineForBird(200,180,185,190, 'yellow', 2);
lineForBird(200,180,200,200, 'yellow', 2);
lineForBird(200,180,215,190, 'yellow', 2);
