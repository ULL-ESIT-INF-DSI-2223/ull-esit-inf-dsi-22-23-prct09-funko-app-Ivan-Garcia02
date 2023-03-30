import 'mocha';
import { expect } from "chai";
import { ProcesadorCSV } from "../../src/modificacion/procesadorCSV";

describe('Tests para ProcesadorCSV', () => {
  it('Tests de creacion de un objeto', () => {
    expect(new ProcesadorCSV("mochila.csv")).not.to.be.undefined;
  })

  /*it('Tests de procesar', () => {
    let mochila: ProcesadorCSV = new ProcesadorCSV("mochila.csv")
    expect(mochila.procesar());
  })*/
})