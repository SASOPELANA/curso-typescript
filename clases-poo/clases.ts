// Poo en typescript

class Pelicula {
  // atributos o campos de la clase
  _nombre?: string;
  _protagonista?: string[];
  _actores?: string[];

  // constructor
  constructor(nombre: string, protagonista: string[], actores: string[]) {
    this._nombre = nombre;
    this._protagonista = protagonista;
    this._actores = actores;
  }

  // metodos
  proyectarEnCine() {
    console.log(`La pelicula de ${this._nombre} esta proyectandose en el cine.`);
  }
}

// Intanciando la clase o creando un objeto
const pelicula = new Pelicula('Troya',['Aquiles', 'Hector'],['Brat Pitt', 'Eric Bana']);
const pelicula2 = new Pelicula('Avengers', ['Ironman', 'Captain America'], ['Robert Downey Jr', 'Chris Evans']);

console.log(pelicula)
pelicula.proyectarEnCine();
console.log('\n');
console.log(pelicula2)
pelicula2.proyectarEnCine();