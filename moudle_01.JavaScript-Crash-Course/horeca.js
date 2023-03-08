function horeca_app(){
    //lists
    const dranks = {
        "bier" : 2.50,
        "wijn" : 3.75,
        "fris" : 1.65
    };
    const bon = [];

    //var
    let testen = true
    var totaalPrijs = 0

    while (testen) {
        var keuze = prompt("Wat wilt u bestellen?  ");
        if (keuze in dranks){
            var aantal = parseInt(prompt("Hoeveel drankje wilt u hebben?  "));
            if (bon.includes(keuze)){
                console.log("hello")
                bon["amount"] += aantal
            }else{
            bon.push({
                "name" : keuze,
                "price" : dranks[keuze],
                "amount" : aantal
            });
            };
            totaalPrijs += dranks[keuze] * aantal
        } else if (keuze.toLowerCase() == 'stop'){
            testen = false
        } else {
            alert("Sorry, Dat ken ik niet")   
        }   
    }
    bon.push({"Totaalprijs" : totaalPrijs})
    return bon
}

console.log(horeca_app())