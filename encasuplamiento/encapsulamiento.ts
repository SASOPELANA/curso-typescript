// generico

class Sorteo<T> {
  // atributos o campos de la clase
  private ticket?: T;

  // contructor
  constructor(private nombre: string) {}

  // metodos
  setTicket(ticket: T) {
    this.ticket = ticket;
  }

  getTikcket() {
    return this.ticket;
  }

  public sortear(): string {
    return `Para ${this.nombre} el ticket es ${this.ticket}.`;
  }
}

// creamos el objeto
let sorteo = new Sorteo<number>("Sergio Developer");

sorteo.setTicket(7);
console.log(sorteo.sortear());
