var image = document.getElementById("image");
var demo = document.getElementById("demo");

document.onkeydown = checkKey;
image.style.transform = "rotate(90deg)"
let position = 0;
let step = 5;

function checkKey(e) {
    step = step + 5
    position = position + 164;
	console.log("key nr = " + e.keyCode);
    e = e || window.event;
    if(e.keyCode == 32){
    	console.log("spacebar");
  
    } else if (e.keyCode == '38') {  // up arrow
        console.log("Up arrow");

    } else if (e.keyCode == '40') { // down arrow
        console.log("down arrow");

    } else if (e.keyCode == '37') { // left arrow
    	console.log("left arrow");

    } else if (e.keyCode == '39') {   // right arrow
    	console.log("right arrow");
        image.style.transform = "rotate(90deg)"
        image.style.backgroundPosition = `-${parseInt(position)}px 0px`; // check goed de rupsband

        demo.style.left =`${parseInt(step)}px`;
    } if (position < 1312) { 
        position = position + 256;
    } else { 
        position = 256; }
}