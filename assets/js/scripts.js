// # Ejercicios

// ## VARIABLES CSS

// - Crea un div de color rojo y colócalo en la parte superior izquierda de tu web. Haz que tu web tenga un min-height de 500vh para generar scroll. El div deberá sincronizarse con el scroll, si estás arriba del todo medirá 0 de ancho y si está abajo del todo medirá el 100%, según vayas haciendo scroll el div deberá ir creciendo o encogiendo en función de si subes o bajas.

// - Añade un h1 al ejercicio anterior que te diga cuantos px te has desplazado.

// - Crea un botón en tu web que al pulsarlo genere un color aleatorio para el body y se aplique.

// - Crea un div de 20px x 20px y sincronizalo con el movimiento del ratón, el div deberá quedarse pegado a la flecha de tu ratón y moverse junto a él.

// Crea una función que reciba un número e imprima tantas vocales aleatorias como el número que le hayas pasado. Si el número es 5, te dará 5 vocales aleatorias.

const numberElement = number =>{
    let vowels = 'aeiou';
    let result = '';
    for (let i= 0; i< number - 1; i++){
        result += vowels.charAt(Math.floor(Math.random()* number));
        
    }
    console.log(result)
}

numberElement (6);



