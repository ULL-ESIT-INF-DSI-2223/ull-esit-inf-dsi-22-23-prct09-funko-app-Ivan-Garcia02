import { Procesador, ElementoMochila } from './procesador'
import { ProcesadorCSV } from './procesadorCSV'
import { ProcesadorJson } from './procesadorJson';

function clientCode(procesador: Procesador) {
  console.log(procesador.procesar());
}

clientCode(new ProcesadorCSV("mochila.csv"));
//console.log();
//clientCode(new ProcesadorJson("mochila.json"));