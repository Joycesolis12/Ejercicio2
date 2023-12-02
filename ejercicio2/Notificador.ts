import { Observador } from "./Observador";

export class Notificador implements Observador {
  private observadores: Observador[] = [];

  public agregarObservador(observador: Observador): void {
    this.observadores.push(observador);
  }

  public quitarObservador(observador: Observador): void {
    const indice = this.observadores.indexOf(observador);
    if (indice !== -1) {
      this.observadores.splice(indice, 1);
    }
  }

  public notificar(producto: any): void {
    this.observadores.forEach((observador) => {
      observador.actualizar(producto);
    });
  }

  // Método de la interfaz Observador
  public actualizar(producto: any): void {
    // Lógica de actualización si es necesario
    console.log(`Notificación:  Reciba un coordial saludo de la empresa DCREACIONES JOYCE donde hay mucha novedad de vestidos de niñas, señoritas y personas mayores , este correo es para notificar que el producto de hace unos dias que le llamo la atencion gracias al BLACK FRIDAY a bajado su precio. Nuevo precio: ${producto.obtenerPrecio()}`);
    
    
  }
}
