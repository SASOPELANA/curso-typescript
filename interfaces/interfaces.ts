// Solo recibe el mismo tipo de dato definido primero. Este objeto literal.
//
// interfaces --> sirve para definir el tipo de dato personalizado

interface Programador {
  nombre: string;
  tecnologias: string[];
  tomaMate: boolean | null;
}

let programador: Programador = {
  nombre: "Sergio Developer",
  tecnologias: ["React", "Astro", "SQL", "Node"],
  tomaMate: true,
};

let programador2 = {
  nombre: "Juan",
  tecnologias: ["Cobol", "Java", "Python"],
  tomaMate: null,
  apellido: "Perez",
  recibido: false
};


function enviarCurriculun(programador: Programador){
  console.log(`Enviando curriculun de ${programador.nombre}`);
}



enviarCurriculun(programador2)