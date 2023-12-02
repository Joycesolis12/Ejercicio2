import { Producto } from "./Producto";
import { Notificador } from "./Notificador";
import { Suscriptor } from "./Suscriptor";

// Crear instancias
const producto = new Producto(180); // Precio inicial del producto
const notificador = new Notificador();
const suscriptor1 = new Suscriptor("Cliente1");
const suscriptor2 = new Suscriptor("Cliente2");

// Suscribir observadores al notificador
notificador.agregarObservador(suscriptor1);
notificador.agregarObservador(suscriptor2);

// Agregar notificador al producto
producto.agregarObservador(notificador);

// Simular cambio de precio (bajada de precio)
producto.establecerPrecio(150);

// Simular otro cambio de precio (sin bajada)
producto.establecerPrecio(200);
