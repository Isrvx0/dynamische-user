var image = document.getElementById("image");
var demo = document.getElementById("demo");
var width = window.innerWidth - 100;
var height = window.innerHeight - 100;

console.log(`width: ${width}`);
console.log(`height: ${height}`);
document.onkeydown = checkKey;
image.style.transform = "rotate(90deg)"
let position = 0;
let leftOrRight = 5;
let upOrDown = 5;

function checkKey(e) {
    position = position + 164;
	console.log("key nr = " + e.keyCode);
    e = e || window.event;
    
    if(e.keyCode == 32){
    	console.log("spacebar");
        image.style.transform = "rotate(90deg)"
        image.style.backgroundPosition = `-${parseInt(move)}px 0px`;

    } else if (e.keyCode == '38') {  // up arrow
        console.log("Up arrow");
        upOrDown = upOrDown - 5;
        image.style.transform = "rotate(360deg)"
        image.style.backgroundPosition = `-${parseInt(position)}px 0px`;
        demo.style.top =`${parseInt(upOrDown)}px`;

    } else if (e.keyCode == '40') { // down arrow
        console.log("down arrow");
        upOrDown = upOrDown + 5;
        image.style.transform = "rotate(180deg)"
        image.style.backgroundPosition = `-${parseInt(position)}px 0px`;
        demo.style.top =`${parseInt(upOrDown)}px`;

    } else if (e.keyCode == '37') { // left arrow
    	console.log("left arrow");
        leftOrRight = leftOrRight - 5
        image.style.transform = "rotate(-90deg)"
        image.style.backgroundPosition = `-${parseInt(position)}px 0px`;
        demo.style.left =`${parseInt(leftOrRight)}px`;

    } else if (e.keyCode == '39') {   // right arrow
    	console.log("right arrow");
        leftOrRight = leftOrRight + 5
        image.style.transform = "rotate(90deg)"
        image.style.backgroundPosition = `-${parseInt(position)}px 0px`; // check goed de rupsband
        demo.style.left =`${parseInt(leftOrRight)}px`;
    

    } if (position < 1312) { 
        position = position + 256;
    } else { 
        position = 256; 
    } if (upOrDown < 0 || upOrDown > height){
        upOrDown = 0;
    } if (leftOrRight < 0 || leftOrRight > width ){
        leftOrRight = 0;
    };
    console.log(`left or right: ${leftOrRight}`);

}