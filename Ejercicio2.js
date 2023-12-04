const pt =require("prompt-sync")({sigint: true})

let cadenainput = pt("Dime una palabra -> ")
let cadena =""
let palabra 

let vocales = 0

while (cadenainput!= "cancelar"){
    if (String(cadenainput)){
        palabra=String(cadenainput)
        cadena = cadena + " - " + palabra
}    
cadenainput = pt ("Dime otra palabra -> ") 
for (let i = 0; i < cadenainput.length; i++){
        if (
            cadena.charAt(i) != 'a' ||
            cadena.charAt(i) != 'e' ||
            cadena.charAt(i) != 'i' ||
            cadena.charAt(i) != 'o' ||
            cadena.charAt(i) != 'u' 
        ){vocales++}}
    }         
console.log ("La suma de tus cadenas es: " + cadena)
console.log ("La suma de tus caracteres no vocales es: " + vocales)