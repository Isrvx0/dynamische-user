// h = int(input("Enter diamond's height: "))

// for x in range(h):
//     print(" " * (h - x), "*" * (2*x + 1))
// for x in range(h - 2, -1, -1):
//     print(" " * (h - x), "*" * (2*x + 1))


function clicked_button(event){
    let string = "";
    var div = document.getElementById("resulten");
    var height = prompt("Enter the diamond's height:  ") 
    console.log("the diamond's height is " + height)
   
    for (let index = 1; index <= height; index++){
        string += (" " * (height - index), "*" * (2*index + 1));}
        string += "\n"

    for (let index = 1; index <= height; index++){
        string += (" " * (height - index), "*" * (2*index + 1));}
        string += "\n"
    console.log(string)
    }

buttom = document.getElementById("starten")
buttom.onclick = clicked_button

