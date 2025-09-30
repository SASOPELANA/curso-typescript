// Solo recibe el mismo tipo de dato definido primero. Este objeto literal.
//
// type personlizados --> sirve para definir el tipo de dato personalizado

type Programador = {
  nombre: string;
  tecnologias: string[];
  tomaMate: boolean | null;
};

let programador: Programador = {
  nombre: "Sergio",
  tecnologias: ["React", "Astro", "SQL", "Node"],
  tomaMate: true,
};

let programador2: Programador = {
  nombre: "Juan ",
  tecnologias: ["Cobol", "Java", "Python"],
  tomaMate: null,
};
