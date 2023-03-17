function handle_click(click_event){
    if  (click_event.target.id == 'btn1'){
        click_event.target.classList.add('blue') // als je klikt op btn1 krijgt kleur blue
    } else {
        click_event.target.classList.toggle('blue') // als je klikt op btn2 , krijg je de een keer blue en andere keer niet
    }
    result.innerHTML = `Button met id <strong>${click_event.target.id}</strong> was geklikt!`;
    // click_event.target.classList.toggle('blue') -> een keer krijgt blue en andere keer niet
    //click_event.target.classList.add('blue') -> roept class blue
    //console.log(click_event); -> kijk naar de onderste voorbeeld
    //alert("hello from js") 
}

// print(f"hello {name}") --> ``


// handle_click({name: 'this is my click-event', id: 1234}); //key : value

btn1.onclick = handle_click;
btn2.onclick = handle_click;
fake_button.onclick = handle_click;
