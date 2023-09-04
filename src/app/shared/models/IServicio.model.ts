import { Observable } from "rxjs";
export interface IServicio {
    obtenerDatos(): Observable<any>;
    crearDato(dato: any): Observable<any>;
    actualizarDato(dato: any): Observable<any>;
    eliminarDato(id: number): Observable<any>;
  }