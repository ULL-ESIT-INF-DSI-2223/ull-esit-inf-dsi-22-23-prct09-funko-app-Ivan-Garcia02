export enum TipoFunko {Pop = 'Pop!', PopRides = 'Pop! Rides', VynilSoda = 'Vinil Soda', VynilGold = 'Vinil Gold'};
export enum GeneroFunko {Animacion = 'Animacion', Peliculas = 'Peliculas', TV = 'TV', Videojuegos = 'Videojuegos', 
                         Deportes = 'Deportes', Musica = 'Musica', Anime = 'Anime'};
                  
export class Funko {
  private _ID: number;
  private _nombre: string;
  private _descripcion: string;
  private _tipo: TipoFunko;
  private _genero: GeneroFunko;
  private _franquicia: string;
  private _numeroFranquicia: number;
  private _exclusivo: boolean;
  private _caracteristicasEspeciales: string;
  private _valorMercado: number;

  /**
   * Constructor de la clase Funko
   * @param ID Identificador único del Funko
   * @param nombre Nombre del Funko
   * @param descripcion Descripcion del Funko
   * @param tipo Tipo, Pop!, Pop! Rides, Vynil Soda o Vynil Gold, entre otros
   * @param genero Genero, Animación, Películas y TV, Videojuegos, Deportes, Música o Ánime, entre otras
   * @param franquicia Franquicia, The Big Bang Theory, Game of Thrones, Sonic The Hedgehog o Marvel: Guardians of the Galaxy, entre otras.
   * @param numeroFranquicia Número identificativo del Funko dentro de la franquicia correspondiente
   * @param exclusivo Verdadero en el caso de que el Funko sea exclusivo o falso en caso contrario
   * @param caracteristicasEspeciales Característica especiales del Funko como, por ejemplo, si brilla en la oscuridad o si su cabeza balancea
   * @param valorMercado Precio del Funko
   */
  constructor(ID: number, nombre: string, descripcion: string, tipo: TipoFunko, genero: GeneroFunko, franquicia: string, 
              numeroFranquicia: number, exclusivo: boolean, caracteristicasEspeciales: string, valorMercado: number) {
    this._ID = ID;
    this._nombre =  nombre;
    this._descripcion = descripcion;
    this._tipo = tipo;
    this._genero = genero;
    this._franquicia = franquicia;
    this._numeroFranquicia = numeroFranquicia
    this._exclusivo = exclusivo;
    this._caracteristicasEspeciales = caracteristicasEspeciales;
    this._valorMercado = valorMercado;
  }

  /** 
   * Getter del atributo _ID
   * @returns el atributo _ID
   */
  get ID() {
    return this._ID;
  }
  set ID(ID: number) {
    this._ID = ID;
  }

  /** 
   * Getter del atributo _nombre
   * @returns el atributo _nombre
   */
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre: string) {
    this._nombre = nombre;
  }

  /** 
   * Getter del atributo _descripcion
   * @returns el atributo _descripcion
   */
  get descripcion() {
    return this._descripcion;
  }
  set descripcion(descripcion: string) {
    this._descripcion = descripcion;
  }

  /** 
   * Getter del atributo _tipo
   * @returns el atributo _tipo
   */
  get tipo() {
    return this._tipo;
  }
  set tipo(tipo: TipoFunko) {
    this._tipo = tipo;
  }

  /** 
   * Getter del atributo _genero
   * @returns el atributo _genero
   */
  get genero() {
    return this._genero;
  }
  set genero(genero: GeneroFunko) {
    this._genero = genero;
  }

  /** 
   * Getter del atributo _franquicia
   * @returns el atributo _franquicia
   */
  get franquicia() {
    return this._franquicia;
  }
  set franquicia(franquicia: string) {
    this._franquicia = franquicia;
  }

  /** 
   * Getter del atributo _numeroFranquicia
   * @returns el atributo _numeroFranquicia
   */
  get numeroFranquicia() {
    return this._numeroFranquicia;
  }
  set numeroFranquicia(numeroFranquicia: number) {
    this._numeroFranquicia = numeroFranquicia;
  }

  /** 
   * Getter del atributo _exclusivo
   * @returns el atributo _exclusivo
   */
  get exclusivo() {
    return this._exclusivo;
  }
  set exclusivo(exclusivo: boolean) {
    this._exclusivo = exclusivo;
  }

  /** 
   * Getter del atributo _caracteristicasEspeciales
   * @returns el atributo _caracteristicasEspeciales
   */
  get caracteristicasEspeciales() {
    return this._caracteristicasEspeciales;
  }
  set caracteristicasEspeciales(caracteristicasEspeciales: string) {
    this._caracteristicasEspeciales = caracteristicasEspeciales;
  }

  /** 
   * Getter del atributo _valorMercado
   * @returns el atributo _valorMercado
   */
  get valorMercado() {
    return this._valorMercado;
  }
  set valorMercado(valorMercado: number) {
    this._valorMercado = valorMercado;
  }
}