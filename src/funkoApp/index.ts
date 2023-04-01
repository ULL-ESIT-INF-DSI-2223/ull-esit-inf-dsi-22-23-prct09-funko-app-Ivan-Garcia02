import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { FunkoCollection } from './funkoCollection';
import {  Funko, GeneroFunko, TipoFunko } from "./funko";
import { writeFileSync, readdirSync, existsSync  } from 'fs';
import {spawn} from 'child_process';

/*let ivan: FunkoCollection = new FunkoCollection('ivan');
ivan.add(1, "Iron Man", "Funko Pop del superheroe Iron Man", TipoFunko.Pop, GeneroFunko.Peliculas, "Marvel", 1, false, "", 15.5);
ivan.add(2, "Iron Man", "Funko Pop del superheroe Iron Man", TipoFunko.Pop, GeneroFunko.Peliculas, "Marvel", 1, false, "", 15.5);
ivan.list();

let prueba: number = 2;
let prueba2: string = 'Man';
let objectToSave = {ID: prueba, nombre: prueba2, descripcion: 'Funko Pop del superheroe Iron Man', tipo: TipoFunko.Pop, genero: GeneroFunko.Peliculas, franquicia: 'Marvel', numeroFranquicia: 1, exclusivo: false, caractericticasEspeciales: '', valorMercado: 15.5}

//writeFileSync('./data/ivan/2.json', JSON.stringify(objectToSave, null, 2),'utf8');

try {
  if (existsSync('./data/ivan')) {
  const files = readdirSync('./data/ivan');
  for (const file of files)
    console.log(file);
}} catch (err) {
  console.error(err);
}*/
  

yargs(hideBin(process.argv))
  .command('add', 'Añadir un funko', {
  user: {
   description: 'Nombre de usuario',
   type: 'string',
   demandOption: true
  },
  id: {
   description: 'Funko ID',
   type: 'number',
   demandOption: true
  },
  name: {
    description: 'Funko Nombre',
    type: 'string',
    demandOption: true
  }
 }, (argv) => {
  console.log(argv.user, argv.id, argv.name);
  let coleccion: FunkoCollection = new FunkoCollection(argv.user);
  coleccion.list();
  coleccion.add(3, "Iron Man", "Funko Pop del superheroe Iron Man", TipoFunko.Pop, GeneroFunko.Peliculas, "Marvel", 1, false, "", 15.5);
 })
 .help()
 .argv;