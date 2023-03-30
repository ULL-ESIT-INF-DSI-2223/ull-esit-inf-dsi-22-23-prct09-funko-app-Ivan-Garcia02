import { readFileSync } from 'fs';
import { Procesador, ElementoMochila } from './procesador'

export class ProcesadorCSV extends Procesador {
  /**
   * Constructor de la clase ProcesadorCSV
   * @param rutaArchivo Fichero a leer
   */
  constructor(private readonly rutaArchivo: string) {
    super();
  }

  /**
   * Método abstracto para obtener la capacidad de la mochila
   * @returns la capacidad
   */
  protected leerCapacidad(): number {
    const data: Buffer = readFileSync(this.rutaArchivo);
    let dataStr: string = data.toString();

    let numStr: string = "";
    let i: number = 0;
    while( dataStr[i] != '\n') {
      numStr += dataStr[i]
      i++;
    }

    return Number(numStr);
  }

  /**
   * Método abstracto para obtener el numero de elementos de la mochila
   * @returns el numero de elementos
   */
  protected leerNumeroElementos(): number {
    const data: Buffer = readFileSync(this.rutaArchivo);
    let dataStr: string = data.toString();

    let i: number = 0;
    while( dataStr[i] != '\n') { i++; }
    i++;
    let numStr: string = "";
    while( dataStr[i] != '\n') {
      numStr += dataStr[i]
      i++;
    }
    
    return Number(numStr);
  }

  /**
   * Método abstracto para obtener los elementos
   * @returns los elementos
   */
  protected leerElementos(): ElementoMochila[] {
    let elementos: ElementoMochila[] = [];
    const data: Buffer = readFileSync(this.rutaArchivo);
    let dataStr: string = data.toString();

    let i: number = 0;
    while( dataStr[i] != '\n') { i++; }
    i++;
    while( dataStr[i] != '\n') { i++; }
    i++

    let nElement: number = 0;
    while(i != dataStr.length + 1) {
      let numStr: string = "";
      elementos[nElement] = [0, 0];
      while(dataStr[i] != ' ') {
        numStr += dataStr[i];
        i++
      }
      elementos[nElement][0] =  Number(numStr);
      i++;

      numStr = "";
      while(dataStr[i] != '\n' && i != dataStr.length) {
        numStr += dataStr[i];
        i++;
      }
      elementos[nElement][1] =  Number(numStr);
      i++;
      nElement++;
    }

    return elementos; 
  }
}

/*let procesador: Procesador = new ProcesadorCSV("mochila.csv")
console.log(procesador.procesar());*/