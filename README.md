# Práctica 9 - Aplicación de registro de Funko Pops
## Desarrollo de Sistemas Informáticos
> **Nombre:** Iván García González **Correo:** alu0101388786@ull.edu.es

<p align="center">
  <a href="https://coveralls.io/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-Ivan-Garcia02?branch=main">
    <img alt="Coverage Status" src="https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-Ivan-Garcia02/badge.svg?branch=main">
  </a>
  <a href="https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-Ivan-Garcia02/actions/workflows/node.js.yml">
    <img alt="Tests" src="https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-Ivan-Garcia02/actions/workflows/node.js.yml/badge.svg">
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2223_ull-esit-inf-dsi-22-23-prct09-funko-app-Ivan-Garcia02">
    <img alt="Quality Gate Status" src="https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2223_ull-esit-inf-dsi-22-23-prct09-funko-app-Ivan-Garcia02&metric=alert_status">
  </a>
</p>

## Índice
- [Objetivos](#objetivos-de-la-práctica)
- [Ejercicios propuestos](#ejercicios-propuestos)
  - [Funko App](#funko-app)
- [Ejercicio modificación](#ejercicio-modificación)
- [Conclusiones](#conclusiones)
- [Bibliografía](#bibliografía)

## Objetivos de la práctica
En esta práctica vamos a profundizar en los conceptos explicados en clase, sobre Node.js, la API síncrona proporcionada por Node.js para trabajar con el sistema de ficheros y los paquetes `yargs` y `chalk`.

## Ejercicios propuestos
### Funko App
#### funko.ts
Para este ejercicio nos pedian implementar una aplicación que permita almacenar información de los Funko Pops pertenecientes a la colección de un usuario. En concreto, el sistema permitirá añadir, modificar, eliminar, listar y leer la información asociada a un Funko. La información de cada Funko se almacenará como un JSON en el sistema de ficheros de la máquina donde se ejecute la aplicación. Además, solo se podrá interactuar con la aplicación desde la línea de comandos con el paquete `yargs`.

Lo primero que hemos hecho ha sido crear la estructura de datos encargada de almacenar un funko, para esto definimos en el fichero funko.ts, la clase `Funko`, que tendra los siguientes atributos:
```typescript
ID // Identificador único del Funko
nombre // Nombre del Funko
descripcion // Descripcion del Funko
tipo // Tipo, Pop!, Pop! Rides, Vynil Soda o Vynil Gold, entre otros
genero // Genero, Animación, Películas y TV, Videojuegos, Deportes, Música o Ánime, entre otras
franquicia // Franquicia, The Big Bang Theory, Game of Thrones, Sonic The Hedgehog o Marvel: Guardians of the Galaxy, entre otras.
numeroFranquicia // Número identificativo del Funko dentro de la franquicia correspondiente
exclusivo // Verdadero en el caso de que el Funko sea exclusivo o falso en caso contrario
caracteristicasEspeciales // Característica especiales del Funko como, por ejemplo, si brilla en la oscuridad o si su cabeza balancea
valorMercado // Precio del Funko
```

Esta clase tendra los Getters y Setters correpondientes a cada atributo de la clase. Ademas definimos un método encargado de mostrar un Funko por consola, `mostrarFunko()`, en este método haremos uso del paquete `chalk`, para mostar el valor de mercado con distintos colores según los rangos establecidos.
```typescript
if (this._valorMercado > 0 && this._valorMercado <= 5) {
  console.log(`Valor de mercado: ` + chalk.red(`${this._valorMercado}`));
}
else if (this._valorMercado > 5 && this._valorMercado <= 15) {
  console.log(`Valor de mercado: ` + chalk.yellow(`${this._valorMercado}`));
}
else if (this._valorMercado > 15 && this._valorMercado <= 30) {
  console.log(`Valor de mercado: ` + chalk.blue(`${this._valorMercado}`));
}
else if (this._valorMercado > 30) {
  console.log(`Valor de mercado: ` + chalk.green(`${this._valorMercado}`));
}
```

Por último en este fichero definimos dos funciones externas a la clase encargadas de convertir una string a un tipo de uno de los dos enumerables, según los atributos, *tipo* y *genero* de la clase, para ello hacemos uso de un *switch-case*.
```typescript
function convertTipoFunko(type: string) : TipoFunko
function convertGeneroFunko(gener: string) : GeneroFunko
```

#### funkoCollection.ts
Este fichero sera el encargado de almacenar la clase `FunkoCollection` que se encargara de gestionar la colección de Funkos, los atributos de esta clase son:
```typescript
usuario: string; // Usuario propetario de la colección
funkoCollection: Funko[]; // Colección de funkos
```

Lo primero que definimos en esta clase sera el constructor que recibirá como parametro el nombre del propietario, y buscará su carpeta en `data`, para cargar los funkos guardados en los ficheros `.json`, en la `funkoCollection`.
```typescript
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
```

A continuación, vamos a definir los métodos para añadir, eliminar, modificar, listar y mostrar los funkos. Pero antes vamos a dafinir dos métodos que van a ser usados por estos otros que son:
`existeID(ID: number) : number`: Método para saber si existe un ID y para saber su índice, en caso de que no exista devuelve -1.

`private writeFunkoFile(...)`: Método privado encargado de cargar un Funko a un fichero JSON. Para ello hace uso de las funciones de la API sincrona de Node.js, `existsSync()`, para comprobar que existe el directorio de nombre propietario, para si no es así crearlo con `mkdirSync()`, para al final escribir en los ficheros `.json`, con la función `writeFileSync()`.

Ahora si pasamos a definir los métodos para añadir, eliminar, modificar, listar y mostrar los funkos:
- **Añadir:** Para este método comprobamos con la el método `existeID`, que el ID del funko no existe para asi crearlo y meterlo en el array, y llamar al método `writeFunkoFile` para hacerlo persistente. Si todo ha ido bien y el ID no existía, se emite un mensaje informativo en verde por la consola, y en caso contrario, se mostrará un mensaje de error en rojo por la consola, para ello usamos el paquete `chalk`.

- **Modificar:** Para este método comprobamos con la el método `existeID`, que el ID del funko existe para asi modificar cada uno de sus atributos y llamar al método `writeFunkoFile` para hacerlo persistente. Si todo ha ido bien y el ID existía, se emite un mensaje informativo en verde por la consola, y en caso contrario, se mostrará un mensaje de error en rojo por la consola, para ello usamos el paquete `chalk`.

- **Eliminar:** Para este método comprobamos con la el método `existeID`, que el ID del funko existe para asi eliminarlo con el método `splice` y con la función de la API sincrona de Node.js, `rmSync()` eliminar el fichero de ese funko. Si todo ha ido bien y el ID existía, se emite un mensaje informativo en verde por la consola, y en caso contrario, se mostrará un mensaje de error en rojo por la consola, para ello usamos el paquete `chalk`.

- **Listar:** Este método listará todos los funkos de la colección, para ello llama al método de cada funko `mostrarFunko()`.

- **Mostrar:** Para este método comprobamos con la el método `existeID`, que el ID del funko existe para asi mostrarlo con el método del funko concreto `mostrarFunko()`. Si todo ha ido bien y el ID existía, se emite un mensaje informativo en verde por la consola, y en caso contrario, se mostrará un mensaje de error en rojo por la consola, para ello usamos el paquete `chalk`.

#### funko-app.ts
En este fichero definiremos el codigo encargado de la interación con el usuario a través de la línea de comandos, para ello vamos a hacer uso del paquete `yargs`.

Vamos a definir los 5 opciones que permite nuestra aplicación, añadir, eliminar, modificar, listar y mostrar los funkos. Para ello usamos el `.command`. Tanto para el añadir como para modificar pedimos por parametros el usuario, y todos los elementos del funko a añadir o modificar, para a continuación, crear el objeto `FunkoCollection` y llamar al método correspondiente `add` o `modify`.

Para el caso de eliminar y mostrar un funko concreto, solo pediremos el usuario y el ID, para despues llamar a los métodos `remove` y `show`, Y para la opción de listar todos los funkos solo pediremos el usuario.


## Ejercicio Modificación
En este modificación nos pedian implementar un codigo capaz de procesar los datos del problema de la mochila, dados los fichero en CSV y JSON, haciendo uso del patron `template` y de la API sincrona de Node.js para trabajar con el sistema de ficheros.

#### procesador.ts
Para ello lo primero sera definir la clase plantilla `Procesador`, y el método plantilla que va a ser:
```typescript
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
```

Este método va a llamar a varios métodos que tendran que ser definidos en las clase que hereden, por lo que los siguientes métodos seran abstractos:
```typescript
protected abstract leerCapacidad(): number;
protected abstract leerNumeroElementos(): number;
protected abstract leerElementos(): ElementoMochila[];
```

Tambien en esta clase definimos varios métodos `hook` para comprobar el comportamiento del método plantilla, estos imprimiran por pantalla los valores que devuelve los métodos abstractos en estos `hooks` son lo siguientes:
```typescript
afterCapacidad(capacidad: number) {
  console.log(`La capacidad de la mochila es: ${capacidad}`);
}
afterNumElementos(numeroElementos: number) {
  console.log(`El número de elementos de la mochila es: ${numeroElementos}`);
}
afterElementos(elementos: ElementoMochila[]) {
  console.log(`Los elementos de la mochila son: ${elementos}`);
}
```





## Conclusiones
En esta práctica hemos realizado varios ejercicios con los que hemos practicado los conceptos explicados en clase, sobre Node.js, la API síncrona proporcionada por Node.js para trabajar con el sistema de ficheros y los paquetes `yargs` y `chalk`.

En concreto, he practicado más profundamente las funciones de la API sincrona de Node.js, `writefileSync`, `readfileSync`, `existsSync`, `mkdirSync` y `rmSync`.

## Bibliografía
- [Guion de la práctica](https://ull-esit-inf-dsi-2223.github.io/prct09-filesystem-funko-app/)
- [Apuntes de la asignatura](https://ull-esit-inf-dsi-2223.github.io/nodejs-theory/)