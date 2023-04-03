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
En esta práctica vamos a profundizar en los conceptos explicados en clase, sobre Node.js, el API síncrona proporcionada por Node.js para trabajar con el sistema de ficheros y los paquetes `yargs` y `chalk`.

## Ejercicios propuestos
### Funko App
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


## Ejercicio Modificación




## Conclusiones
En esta práctica hemos realizado varios ejercicios con los que hemos practicado los conceptos explicados en clase, clases e interfaces genéricas en TypeScript, además de los principios SOLID.

En concreto, he practicado más profundamente la herencia entre clases abstractas genéricas, las propiedades de los atributos como *protected* o *readonly*. Y el cubrimiento de código con la herramienta Coveralls.

## Bibliografía
- [Guion de la práctica](https://ull-esit-inf-dsi-2223.github.io/prct06-generics-solid/)
- [Apuntes de la asignatura](https://ull-esit-inf-dsi-2223.github.io/typescript-theory/)