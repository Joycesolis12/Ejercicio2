import { Observador } from "./Observador";

export class Producto {
  private precio: number;
  private observadores: Observador[] = [];

  constructor(precio: number) {
    this.precio = precio;
  }

  public obtenerPrecio(): number {
    return this.precio;
  }

  public agregarObservador(observador: Observador): void {
    this.observadores.push(observador);
  }

  public establecerPrecio(nuevoPrecio: number): void {
    if (nuevoPrecio < this.precio) {
      this.precio = nuevoPrecio;
      this.notificarObservadores();
    }
  }

  private notificarObservadores(): void {
    this.observadores.forEach((observador) => {
      observador.actualizar(this);
    });
  }
}
