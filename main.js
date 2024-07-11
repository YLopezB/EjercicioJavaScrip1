/*Ejercicio 1: Realizar un programa que dado 2 números imprima por consola si 
el primer numero es mayor que el segundo.*/
let num1 = 5
let num2 = 1

if(num1 > num2){
    console.log("El numero "+num1+ " es mayor al numero "+num2)
}else{
    console.log("El numero "+num1+ " es menor o igual al numero "+num2)
}

/*Ejercicio 2: Realizar un programa que dado 2 números imprima por consola 
si los numeros son iguales o si son diferentes.*/ 


if(num1 == num2){
    console.log("El numero "+num1+ " es igual al numero "+num2)
}else {
    console.log("El numero "+num1+" es diferente del numero "+num2)
}

/*Ejercicio 3: Realizar un programa que dado 2 números imprima por consola 
cual de los 2 numeros es el mas grande o si son iguales.*/

if(num1 > num2){
    console.log("El numero "+num1+ " es mayor al numero "+num2)
}else {
    console.log("El numero "+num1+" es menor o igual al numero "+num2)
}


/*Ejercicio 4: Realizar un programa que dado 3 números imprima por pantalla 
cual de los 3 es el más chico. */

let num3 = 5

if(num1 < num2 && num1 < num3){
    console.log("El numero "+num1+ " es mas chico que los numeros "+num2+ ", " +num3)
}else if (num2 < num1 && num2 < num3) {
    console.log("El numero "+num2+ " es mas chico que los numeros "+num1+ ", " +num3)
} else if(num3 < num1 && num3 < num2){
    console.log("El numero "+num3+ " es mas chico que los numeros "+num1+ ", " +num2)
}else{
    console.log("Los numeros "+num3+ ", "+num1+ " y " +num2+ " son iguales")    
}

/*Ejercicio 5: Realizar un programa que dado 2 objetos representando personas 
con las propiedades nombre, edad y altura imprima por pantalla cual de las 2 
personas es la mas alta y cual es la de mayor edad. */

let persona1 = {
    nombre: "Yeison",
    edad: 31,
    altura: 1.67,
}
let persona2 = {
    nombre: "Stefani",
    edad: 26,
    altura: 1.56,
}

if (persona1.edad > persona2.edad) {
    console.log(persona1.nombre+" tiene "+persona1.edad+ " años y es mayor que "+persona2.nombre+ " que tiene "+persona2.edad+ " años")
} else if(persona2.edad > persona1.edad){
    console.log(persona2.nombre+" tiene "+persona2.edad+ " años y es mayor que "+persona1.nombre+ " que tiene "+persona1.edad+ " años")
} else {
    console.log(persona1.nombre+" y "+persona2.nombre+ " tienen la misma edad "+persona1.edad+" años")
}

if (persona1.altura > persona2.altura) {
    console.log(persona1.nombre+" mide "+persona1.altura+ " metros y es mas alto que "+persona2.nombre+ " que mide "+persona2.altura+ " metros")
} else if(persona2.altura > persona1.altura){
    console.log(persona2.nombre+" mide "+persona2.altura+ " metros y es mas alto que "+persona1.nombre+ " que mide "+persona1.altura+ " metros")
} else {
    console.log(persona1.nombre+" y "+persona2.nombre+ " tienen la misma alutra "+persona1.altura+" metros")
}


/*Ejercicio 6: Realizar un programa que permita ingresar por pantalla tu nombre,
edad, altura, visión y permita determinar si estas capacitado para conducir. 
La persona deberá cumplir con una edad mínima de 18 años, medir mas de 150cm 
y tener una visión de 8 de 10 como mínimo.*/

let nombre = prompt("Ejercicio 6, ingrese su nombre: ")
let edad = prompt("Ingrese su edad: ")
let altura = prompt("Ingrese su altura en cm: ")
let vision = prompt("Ingrese su vision del valor 1 al 10: ")

if(edad >= 18 && altura >= 150 && vision > 7){
    console.log("Felicidades "+nombre+" estas capacitado para conducir.")
} else if(edad < 18){
    console.log("Lo siento "+nombre+" con "+edad+ " años no cumples con la edad minima para conducir")
} else if(altura < 150){
    console.log("Lo siento "+nombre+" con "+altura+ " cm no cumples con la altura minima para conducir")
} else {
    console.log("Lo siento "+nombre+" con tu vision de "+vision+ " no estas capacitado para conducir")
}

/*Ejercicio 7: Realizar un programa que permita el ingreso de los siguientes 
datos: Nombre, pase (vip o normal), si posee entrada (si o no, s o n, true o 
false). Las personas que posean tu mismo nombre tienen ingreso libre así como 
también los que posean un pase vip, mostrar un mensaje de bienvenida. Si posee 
entrada preguntar si desea utilizarla, en caso afirmativo mostrar mismo mensaje 
de bienvenida. Y por último de no tener el mismo nombre o poseer un pase vip o 
entrada, preguntar si desea comprar, caso afirmativo solicitar dinero disponible,
si posee $1000 o más, mostrar mensaje de venta de entrada y bienvenida, caso 
contrario mostrar mensaje de rechazo de venta, y en caso contrario a no querer 
comprar, mostrar mensaje de despedida.*/

nombre = prompt("Ejercicio 7, ingrese su nombre: ")
pase = prompt("Ingrese su pase vip o normal")
entrada = prompt("¿Posee entrada? escriba (si o no))")

let minombre = "yeison"
let dineroDisponible = 0

if(nombre == minombre){
    console.log(nombre+", Bienvenido tienes mi nombre")
}else if (pase == "vip"){
    console.log(nombre+", Bienvenido tienes pase vip")
}else if (entrada == "si" || entrada == "s" || entrada == "true"){
    opcion = prompt(nombre+", ¿desea usar su entrada? eliga la opcion escribiendo si o no")
    switch (opcion){
        case "si":
            console.log(nombre+ " Bienvenido, usaste tu entrada")
            break
        case "no":
            console.log(nombre+", fue un gusto.") 
            break   
    }
} else {
    opcion2 = prompt(nombre+", usted no posee un pase Vip o entrada, ¿Desea comprarla? eliga la opcion escribiendo si o no")
    if (opcion2 == "si" || opcion2 == "s" || opcion2 == "true"){
            dineroDisponible = prompt("Ingrese el dinero disponible: ")
            if (dineroDisponible >= 1000){
                console.log("Venta de entrada exitosa, " +nombre+", bienvenido")
            }else{
                console.log("Rechazo de venta, dinero insuficiente para la compra")
            }
    }else{            
        console.log("Señor "+nombre+ " fue un gusto atenderlo, hasta luego.")       
        }    
}

/*Ejercicio 8: Realizar un juego de adivinanza estableciendo un valor entre 
1 y 10 en una variable llamada numeroIncognita y que permita en 3 intentos 
adivinar el número. El usuario deberá ingresar un numero del 1 al 10 por 
pantalla en 3 intentos el cual se deberá guardar en una variable llamada 
numeroIngresado, y en cada intento deberásmostrarle un mensaje al usuario 
diciendo: “el numero ingresado es mayor, vuelve a intentarlo” o “el numero 
ingresado es menor, vuelve a intentarlo” o en caso de adivinar, un mensaje 
que diga: “Ganaste, haz adivinado el número.” No te preocupes si usas mucho 
código repetido, mas adelante veraz como realizar este juego de manera 
más eficiente.*/

let numeroIncognita = 5
numeroIngresado = prompt("Ejercicio 8: Juego de adivinanza, ingrese un numero del 1 al 10, tienes 3 intentos.")
//primer ingreso del usuario intento1

if(numeroIngresado == numeroIncognita){ //si el usuario adivina en el primer intento
    console.log("Felicidades, has adivinado el numero en el primer intento")
}else{//si el numero es diferente al incognito
    if (numeroIngresado < numeroIncognita){//primer intento y en numero incognito es mayor
        numeroIngresado = prompt("Primer intento fallido, el numero ingresado es menor al numero de la adivinanza, intenta de nuevo: ") 
        //ingreso del usuario el segundo intento
        if(numeroIngresado == numeroIncognita){ //si adivina en el segundo intento
            console.log("Felicidades, has adivinado el numero en el segundo intento")
        }else{ //si el numero en el segundo intento es difente al incognito 
            if(numeroIngresado < numeroIncognita){
                numeroIngresado = prompt("Segundo intento fallido, el numero ingresado es menor al numero de la adivinanza, intenta de nuevo: ")
                //ingreso del usuario el ultimo intento
                    if(numeroIngresado == numeroIncognita){
                        console.log("Felicidades, has adivinado el numero en el Tercer intento")
                    //si lo adivina en el ultimo intento
                    }else{
                        //el usuario pierde en el ultimo intento
                        console.log("Lo siento, no adivinaste el numero, el numero era: "+numeroIncognita)
                    }
            }else if(numeroIngresado > numeroIncognita){
                    numeroIngresado = prompt("Segundo intento fallido, el numero ingresado es mayor al numero de la adivinanza, intenta de nuevo: ")
                if(numeroIngresado == numeroIncognita){
                        console.log("Felicidades, has adivinado el numero en el Tercer intento")
                    //si lo adivina en el ultimo intento
                }else{
                        //el usuario pierde en el ultimo intento
                        console.log("Lo siento, no adivinaste el numero, el numero era: "+numeroIncognita)
                }                
            }
        }    
        }else if(numeroIngresado > numeroIncognita){//primer intento y en numero incognito es mayor
            numeroIngresado = prompt("Primer intento fallido, el numero ingresado es mayor al numero de la adivinanza, intenta de nuevo: ") 
            //ingreso del usuario el segundo intento
            if(numeroIngresado == numeroIncognita){ //si adivina en el segundo intento
                console.log("Felicidades, has adivinado el numero en el segundo intento")
            }else{ //si el numero en el segundo intento es difente al incognito 
                if(numeroIngresado < numeroIncognita){
                    numeroIngresado = prompt("Segundo intento fallido, el numero ingresado es menor al numero de la adivinanza, intenta de nuevo: ")
                    //ingreso del usuario el ultimo intento
                    if(numeroIngresado == numeroIncognita){
                        console.log("Felicidades, has adivinado el numero en el Tercer intento")
                    //si lo adivina en el ultimo intento
                    }else{
                        //el usuario pierde en el ultimo intento
                        console.log("Lo siento, no adivinaste el numero, el numero era: "+numeroIncognita)
                        }
                }else if(numeroIngresado > numeroIncognita){
                    numeroIngresado = prompt("Segundo intento fallido, el numero ingresado es mayor al numero de la adivinanza, intenta de nuevo: ")
                    if(numeroIngresado == numeroIncognita){
                        console.log("Felicidades, has adivinado el numero en el Tercer intento")
                        //si lo adivina en el ultimo intento
                    }else{
                        //el usuario pierde en el ultimo intento
                        console.log("Lo siento, no adivinaste el numero, el numero era: "+numeroIncognita)
                    }                
                }
            }    
        }
        
}


/*Ejercicio 9: Crear un programa que permita ingresar tu edad y decir si eres 
un infante (0 a 12 años), adolescente (13 a 18 años), un mayor joven (19 a 45 
años) o un anciano (mas de 45 años), y en caso de ingresar una edad mayor a 
100 mostrar un mensaje preguntando si en realidad tiene esa edad.*/

edad = prompt("Ejercicio 9. Ingrese su edad:")

if(edad > 0 && edad <= 12){
    console.log("Tu edad es "+ edad + " y eres un infante.")
} else if(edad >= 13 && edad <= 18){
    console.log("Tu edad es "+ edad + " y eres un adolesente.")
}else if(edad >= 19 && edad <= 45){
    console.log("Tu edad es "+ edad + " y eres un joven.")
}else if (edad > 45 && edad < 100){
    console.log("Tu edad es "+ edad + " y eres un anciano.")
}else {
    console.log("En realidad tiene esta edad ¿"+edad+"?")
}

/*Ejercicio 10: Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” 
o “TIJERAS” a 2 jugadores y muestre en pantalla cual de los 2 ha ganado o si 
han empatado. En caso de algún ingreso incorrecto mostrar por pantalla que uno 
de los jugadores ha hecho trampa.*/

let jugador1 = prompt("Ejercicio 10: jugador 1, ingrese piedra, papel o tijera")
let jugador2 = prompt("jugador 2, ingrese piedra, papel o tijera")

if(jugador1 == "piedra"){
    if(jugador2 == "piedra"){
        console.log("Ha sido empate.")
    }else if(jugador2 == "papel"){
        console.log("El jugador 2 ha ganado")
    }else if(jugador2 == "tijera"){
        console.log("El jugador 1 ha ganado")
    }else{
        console.log("El jugador 2 hizo trampa")
    }
}else if(jugador1 == "papel") {
    if(jugador2 == "piedra"){
        console.log("El jugador 1 ha ganado")
    }else if(jugador2 == "papel"){
        console.log("Ha sido empate.")
    }else if(jugador2 == "tijera"){
        console.log("El jugador 2 ha ganado")
    }else{
        console.log("El jugador 2 hizo trampa")
    }
}else if(jugador1 == "tijera"){
        if(jugador2 == "piedra"){
        console.log("El jugador 2 ha ganado")
    }else if(jugador2 == "papel"){
        console.log("El jugador 1 ha ganado")
    }else if(jugador2 == "tijera"){
        console.log("Ha sido empate.")
    }else{
        console.log("El jugador 2 hizo trampa")
    }
}else{
    console.log("El jugador 1 hizo trampa")
}

/*Ejercicio 11: Realizar un programa que permita el ingreso de un color y utilizando 
“switch” mostrar por pantalla los siguientes mensajes según las opciones: Blanco 
o Negro: Falta de color, Verde: El color de la naturaleza, Azul: El color del 
agua, Amarillo: El color del sol, Rojo: El color del fuego, Marrón: el color de 
la tierra, y para cualquier otro valor: Excelente elección, no lo teníamos 
pensado.*/

let color = prompt("Ejercicio 11: ingrese un color")

switch(color){
    case "negro":
        console.log("Falta de color")
        break
    case "blanco":
        console.log("Falta de color")
        break
    case "verde":
        console.log("El color de la naturaleza")
        break
    case "azul":
        console.log("l color del agua")
        break
    case "amarillo":
        console.log("El color del sol")     
        break
    case "rojo":
        console.log("El color del fuego")   
        break
    case "marron":
        console.log("el color de la tierra")   
        break 
    default:
        console.log("exelente eleccion, no lo teniamos pensado")                
}

/*Ejercicio 12: Realizar un programa que permita el ingreso de 2 valores 
numéricos y una operación. Según sea la operación ingresada (suma, resta, 
multiplicación, división) el programa deberá mostrar en pantalla un mensaje 
junto con el resultado. En caso de haber elegido división realizar la operación 
siempre que sea posible o mostrar un mensaje de ERROR si el divisor ingresado 
fue 0.*/

numero1 = prompt("Ejercicio 12. Ingrese el primer numero:")
numero2 = prompt("Ingrese el segundo numero:")
operacion = prompt("Elija una operacion escribiendo: (sum, rest, mult, div)")
let resultado = 0

switch (operacion){
    case "sum":
        resultado = numero1+ numero2
        console.log("La suma de "+numero1+ " y "+numero2 + " es: "+resultado)
    case "rest":
        resultado = numero1 - numero2
        console.log("La resta de "+numero1+ " y "+numero2 + " es: "+resultado)
    case "mult":
        resultado = numero1 * numero2
        console.log("La multiplicacion de "+numero1+ " y "+numero2 + " es: "+resultado)
    case "div":
        if(numero1 != 0 && numero2 != 0){
            resultado = numero1 / numero2
            console.log("La division de "+numero1+ " y "+numero2 + " es: "+resultado)
        }else{
            console.log("Error, no es posible realizar la division con el numero 0")
        }    
}

/*Ejercicio 13: Crear un programa que permita ingresar todos los datos de tu 
documento nacional de identidad, mostrar por pantalla un mensaje que imprima 
todos los datos ingresados y pregunte si están correctos los mismos. En caso 
afirmativo, crear un objeto llamado dni con todos los datos ingresados y 
mostrarlos por consola con console.table() mas un mensaje de registro exitoso, 
en caso de que la persona rechace confirmar los datos, mostrar un mensaje que 
diga: vuelva a intentarlo en 1 mes*/

nombreCompleto = prompt("Ejercicio 13: Ingrese su nombre completo: ")
docIdentidad= prompt("Ingrese su numero DNI: ")
fechNac= prompt("Ingrese su fecha de nacimiento: ")

opcion3 = prompt("Nombre completo: "+nombreCompleto+ ", numero de documento: "+docIdentidad+ ", fecha Nacimiento: "+fechNac+ " ¿Los datos son correctos?")

if (opcion3 == "si"){
    let dni = {
        nombre: nombreCompleto,
        documento: docIdentidad,
        Fecha: fechNac
    }
    console.table(dni)
    console.log("Registro exitoso")
}else{
    console.log("Vuelve a intentarlo en 1 mes")
}

