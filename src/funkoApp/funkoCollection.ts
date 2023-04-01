const chalk = require('chalk');
import { readFileSync, readdirSync, existsSync, writeFileSync, mkdirSync  } from 'fs';
import { Funko, GeneroFunko, TipoFunko } from "./funko";

export class FunkoCollection {
  private _usuario: string;
  private _funkoCollection: Funko[];

  /**
   * Constructor de la clase FunkoCollection
   * @param usuario Usuario que tiene la colección
   */
  constructor(usuario: string) {
    this._usuario =  usuario;
    this._funkoCollection = [];

    if (existsSync('./data/' + usuario)) {
      const files = readdirSync('./data/' + usuario);
      files.forEach(funkoFile => {
        let data = readFileSync('./data/' + usuario + '/' + funkoFile, 'utf8');
        let dataJson =  JSON.parse(data);
        
        let funko: Funko = new Funko (dataJson.ID, dataJson.nombre, dataJson.descripcion, dataJson.tipo, dataJson.genero, dataJson.franquicia, dataJson.numeroFranquicia, dataJson.exclusivo, dataJson.caractericticasEspeciales, dataJson.valorMercado);
        this._funkoCollection.push(funko);
      })
    }
  }

  /** 
   * Getter del atributo usuario 
   * @returns el usuario
   */
  get usuario() {
    return this._usuario;
  }

  add(ID: number, nombre: string, descripcion: string, tipo: TipoFunko, genero: GeneroFunko, franquicia: string, 
      numeroFranquicia: number, exclusivo: boolean, caracteristicasEspeciales: string, valorMercado: number) {

    if (this.existeID(ID) === -1) { // NO existe el ID
      this._funkoCollection.push(new Funko(ID, nombre, descripcion, tipo, genero, franquicia, numeroFranquicia, exclusivo, caracteristicasEspeciales, valorMercado));
      
      let funkoToSave = {ID: ID, nombre: nombre, descripcion: descripcion, tipo: tipo, genero: genero, franquicia: franquicia, numeroFranquicia: numeroFranquicia, exclusivo: exclusivo, caractericticasEspeciales: caracteristicasEspeciales, valorMercado: valorMercado};
      if (!existsSync('./data/' + this._usuario)) {
        mkdirSync('./data/' + this._usuario);
      }
      writeFileSync('./data/' + this._usuario + '/' + ID + '.json', JSON.stringify(funkoToSave, null, 2),'utf8');
      
      console.log(chalk.green(`Nuevo Funko ${nombre}, añadido a la coleccion de ${this._usuario}.`));
    }
    else {
      console.log(chalk.red(`Funko NO añadido a la coleccion de ${this._usuario}, YA existe.`));
    }
  }

  modify(ID: number, nombre: string, descripcion: string, tipo: TipoFunko, genero: GeneroFunko, franquicia: string, 
         numeroFranquicia: number, exclusivo: boolean, caracteristicasEspeciales: string, valorMercado: number) {
  
    let index: number = this.existeID(ID);
    if (index != -1) { // Existe el ID
      this._funkoCollection[index].ID = ID;
      this._funkoCollection[index].nombre = nombre;
      this._funkoCollection[index].descripcion = descripcion;
      this._funkoCollection[index].tipo = tipo; 
      this._funkoCollection[index].genero = genero;
      this._funkoCollection[index].franquicia = franquicia;
      this._funkoCollection[index].numeroFranquicia = numeroFranquicia;
      this._funkoCollection[index].exclusivo = exclusivo;
      this._funkoCollection[index].caracteristicasEspeciales = caracteristicasEspeciales;
      this._funkoCollection[index].valorMercado = valorMercado;
      console.log(chalk.green(`Funko modificado en la coleccion de ${this._usuario}.`));
    }
    else {
      console.log(chalk.red(`Funko NO modificado. No existe en la coleccion de ${this._usuario}, .`));
    }
  }

  remove(ID: number) {
    let index: number = this.existeID(ID);
    if (index != -1) { // Existe el ID
      this._funkoCollection.splice(index, 1);
      console.log(chalk.green(`Funko eliminado de la coleccion de ${this._usuario}.`));
    }
    else {
      console.log(chalk.red(`Funko NO eliminado de la coleccion de ${this._usuario}, NO existe.`));
    }
  }

  list() {
    this._funkoCollection.forEach(funko => {
      funko.mostrarFunko();
      console.log("------------------------------");
    })
  }

  show(ID: number) {
    let index: number = this.existeID(ID);
    if (index != -1) { // Existe el ID
      this._funkoCollection[index].mostrarFunko();
    }
    else {
      console.log(chalk.red(`NO existe el Funko en la coleccion de ${this._usuario}.`));
    }
  }

  existeID(ID: number) : number {
    let indexFound: number = -1;

    this._funkoCollection.forEach((funko, index) => {
      if (funko.ID === ID) {
        indexFound = index
      }
    })

    return indexFound;
  }
}