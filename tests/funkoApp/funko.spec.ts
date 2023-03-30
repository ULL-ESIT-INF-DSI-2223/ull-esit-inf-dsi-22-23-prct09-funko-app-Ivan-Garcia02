import 'mocha'
import { expect } from "chai";
import { Funko, TipoFunko, GeneroFunko } from "../../src/funkoApp/funko";

describe('Tests para la clase Funko', () => {
  it('Se puede crear un objeto de la clase Funko', () => {
    expect(new Funko(1, "Iron Man", "Funko Pop del superheroe IronMan", TipoFunko.Pop, GeneroFunko.Peliculas, "Marvel", 1, false, "", 15.5)).not.to.be.undefined
  })

  it("Se puede acceder y modificar el atributo ID", () => {
    let funkoIronMan: Funko = new Funko(1, "Iron Man", "Funko Pop del superheroe IronMan", TipoFunko.Pop, GeneroFunko.Peliculas, "Marvel", 1, false, "", 15.5);
    expect(funkoIronMan.ID).to.be.eql(1);
    expect(funkoIronMan.ID = 2).to.be.eql(2);
  })
  it("Se puede acceder y modificar el atributo nombre", () => {
    let funkoIronMan: Funko = new Funko(1, "Iron Man", "Funko Pop del superheroe IronMan", TipoFunko.Pop, GeneroFunko.Peliculas, "Marvel", 1, false, "", 15.5);
    expect(funkoIronMan.nombre).to.be.eql("Iron Man");
    expect(funkoIronMan.nombre = "Capitan America").to.be.eql("Capitan America");
  })
  it("Se puede acceder y modificar el atributo descripcion", () => {
    let funkoIronMan: Funko = new Funko(1, "Iron Man", "Funko Pop del superheroe IronMan", TipoFunko.Pop, GeneroFunko.Peliculas, "Marvel", 1, false, "", 15.5);
    expect(funkoIronMan.descripcion).to.be.eql("Funko Pop del superheroe IronMan");
    expect(funkoIronMan.descripcion = "Funko Pop del superheroe Capitan America").to.be.eql("Funko Pop del superheroe Capitan America");
  })
  it("Se puede acceder y modificar el atributo tipo", () => {
    let funkoIronMan: Funko = new Funko(1, "Iron Man", "Funko Pop del superheroe IronMan", TipoFunko.Pop, GeneroFunko.Peliculas, "Marvel", 1, false, "", 15.5);
    expect(funkoIronMan.tipo).to.be.eql(TipoFunko.Pop);
    expect(funkoIronMan.tipo = TipoFunko.PopRides).to.be.eql(TipoFunko.PopRides);
  })
  it("Se puede acceder y modificar el atributo genero", () => {
    let funkoIronMan: Funko = new Funko(1, "Iron Man", "Funko Pop del superheroe IronMan", TipoFunko.Pop, GeneroFunko.Peliculas, "Marvel", 1, false, "", 15.5);
    expect(funkoIronMan.genero).to.be.eql(GeneroFunko.Peliculas);
    expect(funkoIronMan.genero = GeneroFunko.Animacion).to.be.eql(GeneroFunko.Animacion);
  })
  it("Se puede acceder y modificar el atributo franquicia", () => {
    let funkoIronMan: Funko = new Funko(1, "Iron Man", "Funko Pop del superheroe IronMan", TipoFunko.Pop, GeneroFunko.Peliculas, "Marvel", 1, false, "", 15.5);
    expect(funkoIronMan.franquicia).to.be.eql("Marvel");
    expect(funkoIronMan.franquicia = "Marvel Studios").to.be.eql("Marvel Studios");
  })
  it("Se puede acceder y modificar el atributo numeroFranquicia", () => {
    let funkoIronMan: Funko = new Funko(1, "Iron Man", "Funko Pop del superheroe IronMan", TipoFunko.Pop, GeneroFunko.Peliculas, "Marvel", 1, false, "", 15.5);
    expect(funkoIronMan.numeroFranquicia).to.be.eql(1);
    expect(funkoIronMan.numeroFranquicia = 2).to.be.eql(2);
  })
  it("Se puede acceder y modificar el atributo exclusivo", () => {
    let funkoIronMan: Funko = new Funko(1, "Iron Man", "Funko Pop del superheroe IronMan", TipoFunko.Pop, GeneroFunko.Peliculas, "Marvel", 1, false, "", 15.5);
    expect(funkoIronMan.exclusivo).to.be.false;
    expect(funkoIronMan.exclusivo = true).to.be.true;
  })
  it("Se puede acceder y modificar el atributo caracteristicasEspeciales", () => {
    let funkoIronMan: Funko = new Funko(1, "Iron Man", "Funko Pop del superheroe IronMan", TipoFunko.Pop, GeneroFunko.Peliculas, "Marvel", 1, false, "", 15.5);
    expect(funkoIronMan.caracteristicasEspeciales).to.be.eql("");
    expect(funkoIronMan.caracteristicasEspeciales = "Luz").to.be.eql("Luz");
  })
  it("Se puede acceder y modificar el atributo valorMercado", () => {
    let funkoIronMan: Funko = new Funko(1, "Iron Man", "Funko Pop del superheroe IronMan", TipoFunko.Pop, GeneroFunko.Peliculas, "Marvel", 1, false, "", 15.5);
    expect(funkoIronMan.valorMercado).to.be.eql(15.5);
    expect(funkoIronMan.valorMercado = 10.8).to.be.eql(10.8);
  })
})