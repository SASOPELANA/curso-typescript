// Solo recibe el mismo tipo de dato definido primero. Este objeto literal.

let programador = {
  nombre: "Sergio",
  tecnologias: ["React", "Astro", "SQL", "Node"],
  tomaMate: true,
};

programador = {
  nombre: "Juan",
  tecnologias: ["Java", "C#"],
  tomaMate: true,
};

console.log(programador.tecnologias);
