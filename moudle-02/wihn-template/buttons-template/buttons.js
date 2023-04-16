const img = document.getElementById('image1');
const img2 = document.getElementById('image2');

const button1 = document.getElementById('button_1');
const button2 = document.getElementById('button_2');
const button3 = document.getElementById('button_3');


var btn1 = 0
var btn2 = 0
var btn3 = 0


// change the image :
function changeImage1(){
    img.src = 'images/bg1.jpg';
    img2.src = 'images/1.jpg';
    btn1 += 1
    button1.innerHTML = btn1;
    // document.querySelector('#button_1').disabled = true; // Zoeken en retourneren
    button1.disabled = true;
    button2.disabled = false;
    button3.disabled = false;
}

function changeImage2(){
  img.src = 'images/bg2.jpg';
  img2.src = 'images/2.jpg';
  btn2 += 1
  button2.innerHTML = btn2;
  // document.querySelector('#button_1').disabled = true; // Zoeken en retourneren
  button1.disabled = false;
  button2.disabled = true;
  button3.disabled = false;
}
function changeImage3(){
  img.src = 'images/bg3.jpg';
  img2.src = 'images/3.jpg';
  btn3 += 1
  button3.innerHTML = btn3;
  // document.querySelector('#button_1').disabled = true; // Zoeken en retourneren
  button1.disabled = false;
  button2.disabled = false;
  button3.disabled = true;
}