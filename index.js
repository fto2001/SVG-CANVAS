// SUN

const sun = document.getElementById('sun');
const ctxSun = sun.getContext('2d');

// CLOUD

const cloud = document.getElementById('cloud');
const ctxCloud = cloud.getContext('2d');

// TREE

const tree = document.getElementById('tree');
const ctxTree = tree.getContext('2d');

// BIRD 

const bird = document.getElementById('bird');
const ctxBird = bird.getContext('2d');


function drawLineRays(currentIndentX, currentIndentY, finalIndentX, finalIndentY) {
    ctxSun.strokeStyle = 'yellow';
    ctxSun.lineWidth = 3;
    ctxSun.moveTo(currentIndentX, currentIndentY);
    ctxSun.lineTo(finalIndentX, finalIndentY);
    ctxSun.stroke();
}

function drawCircleCloud(indentationCircleX, indentationCircleY, radius) {
    ctxCloud.arc(indentationCircleX, indentationCircleY, radius, 0, 2 * Math.PI);
    ctxCloud.fillStyle = 'blue';
    ctxCloud.fill();
}

function drawLeafsForTree(indentationCircleX, indentationCircleY, radius) {
    ctxTree.fillStyle = 'green';
    ctxTree.beginPath();
    ctxTree.arc(indentationCircleX, indentationCircleY, radius, 0, 2 * Math.PI);
    ctxTree.fill();
}

function circleForBird(indentationCircleX, indentationCircleY, radius, color) {
    ctxBird.fillStyle = color;
    ctxBird.beginPath();
    ctxBird.arc(indentationCircleX, indentationCircleY, radius, 0, 2 * Math.PI);
    ctxBird.fill();
}

function lineForBird(currentIndentX, currentIndentY, finalIndentX, finalIndentY, strokeColor, lineWidth) {
    ctxBird.strokeStyle = strokeColor;
    ctxBird.lineWidth = lineWidth;
    ctxBird.beginPath();
    ctxBird.moveTo(currentIndentX, currentIndentY);
    ctxBird.lineTo(finalIndentX, finalIndentY);
    ctxBird.stroke();
}

ctxSun.arc(100, 100, 40, 0, 2 * Math.PI);
ctxSun.fillStyle = 'yellow';
ctxSun.fill();

ctxTree.fillStyle = 'brown';
ctxTree.fillRect(100, 80, 30, 100);
ctxTree.fill();

ctxTree.strokeStyle = 'black';
ctxTree.lineWidth = 3;
ctxTree.moveTo(70, 180);
ctxTree.lineTo(160, 180);
ctxTree.stroke();

drawLineRays(100, 60, 100, 20);
drawLineRays(100, 140, 100, 180);
drawLineRays(60, 100, 20, 100);
drawLineRays(140, 100, 180, 100);
drawLineRays(72, 72, 44, 44);
drawLineRays(128, 72, 156, 44);
drawLineRays(72, 128, 44, 156);
drawLineRays(128, 128, 156, 156);

drawCircleCloud(35, 100, 25);
drawCircleCloud(65, 95, 30);
drawCircleCloud(95, 100, 25);
drawCircleCloud(125, 95, 30);
drawCircleCloud(155, 100, 25);

drawLeafsForTree(70, 85, 40);
drawLeafsForTree(115, 60, 50);
drawLeafsForTree(160, 85, 40);

circleForBird(150, 100, 50, 'grey');
circleForBird(200, 50, 40, 'lightgrey');
circleForBird(215, 40, 10, 'brown');
circleForBird(215, 40, 4, 'lightblue');

lineForBird(270, 40, 239, 40, 'brown', 3);
lineForBird(270, 40, 239, 50, 'brown', 3);
lineForBird(130, 55, 70, 30, 'brown', 3);
lineForBird(110, 70, 70, 30, 'brown', 3);
lineForBird(125, 140, 105, 180, 'grey', 3);
lineForBird(200, 180, 160, 130, 'grey', 3);
lineForBird(105, 180, 90, 190, 'yellow', 2);
lineForBird(105, 180, 105, 200, 'yellow', 2);
lineForBird(105, 180, 120, 190, 'yellow', 2);
lineForBird(200, 180, 185, 190, 'yellow', 2);
lineForBird(200, 180, 200, 200, 'yellow', 2);
lineForBird(200, 180, 215, 190, 'yellow', 2);
