var image = document.getElementById("image");
var demo = document.getElementById("demo");

document.onkeydown = checkKey;
image.style.transform = "rotate(90deg)"
let move = 0;
let step = 5;

function checkKey(e) {
    step = step + 5
    move = move + 164;
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
    	demo.style.position = `${parseInt(move)}px 0px`; // check goed de rupsband
        image.style.backgroundPosition = `${parseInt(move)}px 0px`; // check goed de rupsband

        image.style.transform = "rotate(90deg)"
        demo.style.left =`${parseInt(step)}px`;

    }
}