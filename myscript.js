// selezione elemento HTML 
const container = document.querySelector(".container");

// creazione variabile content
let content;

// number from 1 to 100
for (let i = 1; i <= 100; i++) {
    //console.log(i);

   // se il numero è divisibile per 3 stampa "fizz", se è divisibile per 5 stampa "buzz", se è divisibile sia per 3 che per 5 stampa "fizzbuzz", se non è divisibile ne per 3 ne per 5 stampa solo il numero
    if (i % 3 === 0)  {
        content = "fizz";
    } else if (i % 5 === 0) {
        content = "buzz";
    } else {
        content = i;
    }

    // creazione elementi tramite innerHTML
    const box = document.createElement("div");

    // aggiunta classe 
	box.classList.add("box");

    // aggiunta contenuto all'elemento
    box.append(content);

    // aggiunta dell'elelmento al container
    container.append(box);
}


