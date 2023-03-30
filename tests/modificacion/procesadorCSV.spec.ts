import 'mocha';
import { expect } from "chai";
import { ProcesadorCSV } from "../../src/modificacion/procesadorCSV";

describe('Tests para ProcesadorCSV', () => {
  it('Tests de creacion de un objeto', () => {
    expect(new ProcesadorCSV("./tests/modificacion/mochila.csv")).not.to.be.undefined;
  })

  it('Tests de procesar', () => {
    let mochila: ProcesadorCSV = new ProcesadorCSV("./tests/modificacion/mochila.csv")
    expect(mochila.procesar());
  })
})