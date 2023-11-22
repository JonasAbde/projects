//Skriv alt jeres kode her

console.log(
  "Opgave 1.1 - Lav et program, som skriver “Hello World” i konsollen"
);
//Lav jeres svar her
console.log("Hello World");


//Opgave 5.1 - Skriv noget kode eller kode sammen med en knap, så i eksekvere følgende funktion:
console.log("//Opgave 5.1")
function myfunction(){
  console.log("hello world")
}
myfunction();

//Opgave 5.2 - I skal lave en funktion som tager 2 tal og returnerer summen af dem.
console.log("//Opgave 5.2")
function addNumbers(a, b){
  return a + b;
}
let result = addNumbers(5, 5); // => 10
console.log(result);

//Opgave 5.3 - vLav en funktion som returnerer true hvis man skriver “Ja” som input og false ved alt andet
console.log("//Opgave 5.3")
function trueFalse(X){
  if (X==="Ja"){
    return console.log("True"); 

  }else{ //hvis ikke, så True eller False

    return console.log("False");
  }
}
trueFalse("Ja");

//Opgave 5.4 - Lav en funktion som fungere som en password-tjekker, i skal definere et password i koden og derefter lave en funktion som kun skriver true hvis man skriver det rigtige kodeord og false hvis det er forkert. Password er selvfølgelig case-sensitiv i vores program, altså der er forskel på store og små bogstave
console.log("//Opgave 5.4")
var correctPassword = "minkode1";

function checkPassword(enteredPassword){
  return enteredPassword === correctPassword
}
var enteredPassword1 = "Minkode1"
console.log(checkPassword(enteredPassword1)); 

//Opgave 5.5 - 1. Lav en **funktion** som i opgaven før, men for brugernavn. Forskellen er at et brugernavn ikke er case-sensitiv, altså at den er ligeglad med store og små bogstaver.
    

