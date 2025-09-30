"use strict";
// Solo recibe el mismo tipo de dato definido primero. Este objeto literal.
//
// interfaces --> sirve para definir el tipo de dato personalizado
Object.defineProperty(exports, "__esModule", { value: true });
let programador = {
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
function enviarCurriculun(programador) {
    console.log(`Enviando curriculun de ${programador.nombre}`);
}
enviarCurriculun(programador2);
//# sourceMappingURL=interfaces.js.map