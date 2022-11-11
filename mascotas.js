
class mascotas {
    nombre = '';
    edad = 0;
    raza = '';
    caracter = '';


    constructor(nombre, edad, raza, caracter) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
        this.caracter = caracter;

    }

    maullar() {
        console.log('Prrr');
    }

    dormir() {
        console.log('Zzz');
    }

    comer() {
        console.log('Ñamñam');
    }

    jugar() {
        console.log('Ya basta');
    }

}


var Cucho = new mascotas('Cucho', 9, 'Salvaje', 'Buena onda');
var Felix = new mascotas('Felix', 10, 'Caricatura', 'Magico');
var Demostenes = new mascotas('Demóstenes', 8, 'Caricatura', 'Tranquilo');
var Salem = new mascotas('Salem', 100, 'Brujo', 'Magico');
var Bodoque = new mascotas('Bodoque', 5, 'Brujo', 'Magico');

console.log('Esto es lo que hace Salem', Salem.dormir());
console.log('Esto es lo que hace Demostenes', Demostenes.maullar());
console.log('Esto es lo que hace Cucho', Cucho.comer());
console.log('Esto es lo que hace Bodoque', Bodoque.jugar());
console.log('Esto es lo que hace Felix', Felix.dormir());