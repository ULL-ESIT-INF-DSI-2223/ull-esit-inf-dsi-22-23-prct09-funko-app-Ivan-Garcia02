export type ElementoMochila = [number, number];

export abstract class Procesador {
  protected beneficios: number[];
  protected pesos: number[];

  /**
   * Constructor de la clase Procesador
   */
  constructor() {
    this.beneficios = [];
    this.pesos = [];
  }

  /**
   * Método plantilla
   * @returns Un vector con los beneficios y otro con los pesos
   */
  public procesar() {
    const capacidad = this.leerCapacidad();
    this.afterCapacidad(capacidad);

    const numeroElementos = this.leerNumeroElementos();
    this.afterNumElementos(numeroElementos);

    const elementos = this.leerElementos();
    this.afterElementos(elementos);

    elementos.forEach(elemento => {
      this.beneficios.push(elemento[0]);
      this.pesos.push(elemento[1]);
    });

    return [this.beneficios, this.pesos];
  }

  /**
   * Método abstracto para obtener la capacidad de la mochila
   */
  protected abstract leerCapacidad(): number;
  /**
   * Método abstracto para obtener el numero de elementos de la mochila
   */
  protected abstract leerNumeroElementos(): number;
  /**
   * Método abstracto para obtener los elementos
   */
  protected abstract leerElementos(): ElementoMochila[];


  
  /**
   * Hook para la capacidad
   * @param capacidad Capacidad de la mochila
   */
  afterCapacidad(capacidad: number) {
    console.log(`La capacidad de la mochila es: ${capacidad}`);
  }
  /**
   * Hook para los Numero de elementos de la mochila
   * @param numeroElementos Numero de elementos de la mochila
   */
  afterNumElementos(numeroElementos: number) {
    console.log(`El número de elementos de la mochila es: ${numeroElementos}`);
  }
  /**
   * Hook para los elementos
   * @param elementos Elementos de la mochila
   */
  afterElementos(elementos: ElementoMochila[]) {
    console.log(`Los elementos de la mochila son: ${elementos}`);
  }
}