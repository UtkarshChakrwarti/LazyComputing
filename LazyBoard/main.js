var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var video = document.getElementById('video');

//test for media access
if (navigator.mediaDevices.getUserMedia) {
 navigator.mediaDevices.getUserMedia({
   video: true
  })
  .then(function(stream) {
   video.srcObject = stream;
  })
  .catch(function(err0r) {
   console.log("Fine!");
  });
}

video.addEventListener('play', function() {
 var $this = this;
 (function loop() {
  if (!$this.paused && !$this.ended) {
   context.drawImage($this, 0, 0, canvas.width, canvas.height);
   context.filter = 'blur(9px) saturate(50)';
   echoColor();
   setTimeout(loop, 1000 / 60); //framerate { Again and again calling echocolor(); }
  }
 })();
}, 0);

//tells canvas props
function imgdet() {
 alert(canvas.height + " " + canvas.width);
}

//rgb to hex conversions
function rgbToHex(r, g, b) {
 if (r > 255 || g > 255 || b > 255)
  throw "Invalid color component";
 return ((r << 16) | (g << 8) | b).toString(16);
}

//get pixel color
function retcol(x, y) {
 var coordinate = "x=" + x + ", y=" + y;
 var p = context.getImageData(x, y, 1, 1).data;
 p[3] = p[3] / 255;
 var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
 return hex;
 
}



//main function for track colors
function echoColor() {

// pixel variables	
 var l1 = retcol(14, 50); //(right,top)
 var l2 = retcol(44, 50);
 var l3 = retcol(74, 50);
 var l4 = retcol(104, 50);
 var l5 = retcol(134, 50);
 var l6 = retcol(164, 50);
 var l7 = retcol(194, 50);
 var l8 = retcol(224, 50);
 var l9 = retcol(254, 50);
 var l10 = retcol(284, 50);

console.log(l1);
 //triggers
 if (l1 == '#ff00ff') {
  console.log('Zero Is Clicked');
  document.getElementById('num').value = "0";
 }
 if (l2 == '#ff00ff' || l2 == '#ff0000')  {
  console.log('Nine Is Clicked');
  document.getElementById('num').value = 9;
 }
 if (l3 == '#ff00ff' || l3 == '#ff0000') {
  console.log('Eight Is Clicked');
  document.getElementById('num').value = 8;
 }
 if (l4 == '#ff00ff'|| l4 == '#ff0000') {
  console.log('Seven Is Clicked');
  document.getElementById('num').value = 7;
 }
 if (l5 == '#ff00ff' || l5 == '#ff0000')  {
  console.log('Six Is Clicked');
  document.getElementById('num').value = 6;
 }
 if (l6 == '#ff00ff' || l6 == '#ff0000')  {
  console.log('Five Is Clicked');
  document.getElementById('num').value = 5;
 }
 if (l7 == '#ff00ff' || l7 == '#ff0000')  {
  console.log('Four Is Clicked');
  document.getElementById('num').value = 4;
 }
 if (l8 == '#ff00ff' || l8 == '#ff0000')  {
  console.log('Three Is Clicked');
  document.getElementById('num').value = 3;
 }
 if (l9 == '#ff00ff' || l9 == '#ff0000')  {
  console.log('Two Is Clicked');
  document.getElementById('num').value = 2;
 }
 if (l10 == '#ff00ff' || l10 == '#ff0000')  {
  console.log('One Is Clicked');
  document.getElementById('num').value = 1;
 }


}