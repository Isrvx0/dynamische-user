const img = document.getElementById("image1");
const img2 = document.getElementById("image2");


button_1.onclick = changeImage;
button_2.onclick = changeImage;
button_3.onclick = changeImage;

button_1.number = 0;
button_2.number = 0;
button_3.number = 0;


// change the image :
function changeImage(event){
    var btn_id = this.id.replace("button_","");
    img.src = `images/bg${btn_id}.jpg`;
    img2.src = `images/${btn_id}.jpg`;

    this.number  += 1;
    this.innerHTML =  this.number;
    let buttons = document.querySelectorAll("button")
    for (button of buttons){
      button.disabled = false;
    }
    this.disabled = true;
};