var image = document.getElementById("image");
var demo = document.getElementById("demo");

document.onkeydown = checkKey;
image.style.transform = "rotate(90deg)"
let move = 0;
let steps = 10;

function checkKey(e) {
    steps = steps + 10
    move = parseInt(move) + 164;
	console.log("key nr = " + e.keyCode);
    e = e || window.event;
    if(e.keyCode == 32){
    	console.log("spacebar");
        image.style.transform = "rotate(90deg)"
        image.style.backgroundPosition = `-${parseInt(move)}px 0px`;
    } else if (e.keyCode == '38') {  // up arrow
        console.log("Up arrow");
        image.style.transform = "rotate(360deg)"
        image.style.backgroundPosition = `-${parseInt(move)}px 0px`;

    } else if (e.keyCode == '40') { // down arrow
        console.log("down arrow");
        image.style.transform = "rotate(180deg)"
        image.style.backgroundPosition = `-${parseInt(move)}px 0px`;

    } else if (e.keyCode == '37') { // left arrow
    	console.log("left arrow");
        image.style.transform = "rotate(-90deg)"
        image.style.backgroundPosition = `-${parseInt(move)}px 0px`;

    } else if (e.keyCode == '39') {   // right arrow
        console.log("right arrow");
    	image.style.backgroundPosition = `${parseInt(move)}px 0px`; // check goed de rupsband
        image.style.transform = "rotate(90deg)"
        demo.style.left = `${parseInt(steps)}px`;
    }
}
