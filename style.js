alert('nu zitten we in de logic')

console.log('nu zitten we in de logic'); 

function clicked_button(event){
    console.log('clicked button');
    var div = document.getElementById("result");
    var name = prompt('Wat is je naam')
    div.innerHTML = 'Hallo vanuit de button ...' ; //+ name
    }

buttom = document.getElementById("start")

buttom.onclick = clicked_button
//clicked_button(1)



// var list = [2,5,'alles is liefde',2,3];
// for (let index in list){
//     var element = list[index];
//     console.log(element);}

// for (let element of list){
//     console.log(element);}

// for (let index = 0; index < list.length; index++){
//     var element = list[index];
//     console.log(element);}

// let index = 0;while (index < list.length){
//     var element = list[index];
//     console.log(element);
//     index++; } // index = index + 1




// var basis = 7;for (let index = 1; index <= 10; index++){
//     let line = index.toString() + ' x ' + basis.toString() + ' = ' + (index * basis).toString()
//     console.log(line);}