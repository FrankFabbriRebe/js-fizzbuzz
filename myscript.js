// number from 1 to 100
for (let i = 1; i <= 100; i++) {
    //console.log(i);

   // se il numero è divisibile per 3 stampa "fizz", se è divisibile per 5 stampa "buzz", se è divisibile sia per 3 che per 5 stampa "fizzbuzz", se non è divisibile ne per 3 ne per 5 stampa solo il numero
    if (i % 3 === 0)  {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
}