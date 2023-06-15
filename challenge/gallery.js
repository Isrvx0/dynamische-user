var container = document.getElementById("image-container")
let imageList = ["image1", "image2", "image3", "image4", "image5"]
const img = document.createElement('img');

img.src = `image/image1.jpg`;
container.appendChild(img);

previous.onclick = changeImage;
next.onclick = changeImage;

var counter = 1
var previous_click = false

function changeImage(e) {
    previous_click = false
    console.log(counter)

    var btn_id = this.id;
    if (btn_id === "previous") {
        counter --
        if ( counter == 0 ) {
            counter = 5
        }
        previous_click = true
        console.log("previous " + counter)

        img.src = `image/image${counter}.jpg`;
        container.appendChild(img);
    
    } else if (btn_id === "next") {
        counter ++
        if (counter == 6) {
            counter = 1
        }
        console.log("next " + counter)

        img.src = `image/image${counter}.jpg`;
        container.appendChild(img);
    } 
}




// Style : ----------------------------------
img.style.width= "75%";

img.style.position= "relative";
img.style.left= "50%";
img.style.transform= "translateX(-50%)";
img.style.display= "flex";
img.style.textAlign= "center";
img.style.justifyContent= "center";
