//Istruzioni:
//Scrivi un programma che stampi i numeri da 1 a 100,
var message;
var fizz = [];
var buzz = []
var fizzBuzz = []

for (var i = 1; i < 101; i++) {
    console.log(i)
    if ((i / 3 % 1) == 0) {
        fizz.push(i)
    } else if ((i / 5 % 1) == 0) {
        buzz.push(i)
    } else if ((i / 5 % 1) && (i / 3 % 1) == 0){
        fizzBuzz.push(i)
    }
}
console.log(fizz)
console.log(buzz)
console.log(fizzBuzz)
//ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.

//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.