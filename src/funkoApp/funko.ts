enum TipoFunko {Pop = 'Pop!', PopRides = 'Pop! Rides', VynilSoda = 'Vinil Soda', VynilGold = 'Vinil Gold'};
enum GeneroFunko {Animacion = 'Animacion', Peliculas = 'Peliculas', TV = 'TV', Videojuegos = 'Videojuegos', 
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
}