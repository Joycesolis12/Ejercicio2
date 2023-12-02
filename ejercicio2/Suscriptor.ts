import { Observador } from "./Observador";

export class Suscriptor implements Observador {
  private nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  public actualizar(producto: any): void {
    console.log(`Notificación para ${this.nombre}:El precio es : ${producto.obtenerPrecio()}`);
  }
}
