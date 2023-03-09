function horeca_app(){
    //lists
    const dranks = {
        "bier" : 2.50,
        "wijn" : 3.75,
        "fris" : 1.65
    };
    //var
    let meer_bestellen = true;

    while (meer_bestellen) {
        var keuze = prompt("Wat wilt u bestellen?  ");
        if (keuze in dranks){
            var aantal = parseInt(prompt("Hoeveel drankje wilt u hebben?  "));
            if (keuze.toLowerCase() == "bier"){
                brierAmount += aantal
            } else if (keuze.toLowerCase() == "wijn"){
                wijnAmount += aantal
            } else{
                frisAmount += aantal
            } 
        } else if (keuze.toLowerCase() == 'stop'){
            meer_bestellen = false
        } else {
            alert("Sorry, Dat ken ik niet")   
        }
    }
    return bon
}
function bon(brierAmount , wijnAmount , frisAmount , totaalPrijs ){
    if (brierAmount > 0){
        bon += ("Name: bier "+ "Price: 2.50 " + "Amount: " + brierAmount);
        totaalPrijs += (2.50 * brierAmount);
    } if (wijnAmount > 0){
        bon += ("\nName: wijn "+ "Price: 3.75 " + "Amount: " + wijnAmount);
        totaalPrijs += (3.75 * wijnAmount);
    } if (frisAmount > 0){
        bon += ("\nName: fris "+ "Price: 1.65 " + "Amount: " + frisAmount);
        totaalPrijs += (1.65 * frisAmount);
    }
    bon += ("\nTotaal prijs =  " + totaalPrijs)
    return bon
}

function 