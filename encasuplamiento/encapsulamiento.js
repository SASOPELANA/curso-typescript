"use strict";
// generico
Object.defineProperty(exports, "__esModule", { value: true });
class Sorteo {
    nombre;
    // atributos o campos de la clase
    ticket;
    // contructor
    constructor(nombre) {
        this.nombre = nombre;
    }
    // metodos
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTikcket() {
        return this.ticket;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}.`;
    }
}
// creamos el objeto
let sorteo = new Sorteo("Sergio Developer");
sorteo.setTicket(7);
console.log(sorteo.sortear());
//# sourceMappingURL=encapsulamiento.js.map