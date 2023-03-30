import { readFileSync } from 'fs';
import { Procesador, ElementoMochila } from './procesador'

export class ProcesadorJson extends Procesador {
  constructor(private readonly rutaArchivo: string) {
    super();
  }

  protected leerCapacidad(): number {
    return 0;
  }

  protected leerNumeroElementos(): number {
    return 0;
  }

  protected leerElementos(): ElementoMochila[] {
    return [[0, 0]];
  }
}