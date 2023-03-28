import 'mocha';
import { expect } from "chai";
import { holaMundo } from "../src/index";

describe('Tests para holaMundo', () => {
  it('Tests de holaMundo', () => {
    expect(holaMundo("Hola Mundo")).to.be.eql("Hola Mundo");
  })
})