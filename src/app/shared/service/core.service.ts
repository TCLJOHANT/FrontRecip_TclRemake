import { HttpClient, HttpHeaders, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const API_URL = environment.url; //url del backend

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  constructor(private httpClient:HttpClient,private tokenService: HttpXsrfTokenExtractor) {}
  // Utiliza la propiedad 'url' del objeto 'environment' para obtener la URL base de la API
  getApiUrl():string {
    return environment.url;
  }
  //metodos http (GET,POST,PUT,DELETE)
  public get<T>(url: String, data: string | Object = ''): Observable<T> {
    return this.httpClient.get<T>(
      API_URL + url + this.getData(data),
      this.getConfig()
    );
  }
  public delete(url: String) {
    return this.httpClient.delete(API_URL + url);
  }





  private getData(data:String|Object):String {
    let dataUrl = '?';
    if (typeof (data) === 'string') {
      if (data.trim() === '') {
        return '';
      }
      dataUrl += data;
    }
    else {
      const keys = Object.keys(data);
      keys.forEach((key, index) => {
        if (index > 0) {
          dataUrl += '&';
        }
        dataUrl += '${key}=${data[key]}';
      });
    }
    return dataUrl.replace('??', '?').trim();
  }


  //configuración de encabezados y tokens de seguridad para las solicitudes HTTP
  private getConfig() {
    const header = {'Accept': 'application/json'};
    // const token = this.tokenService.getToken();
    // return { withCredentials:true, headers: new HttpHeaders(header)};
    return {headers:new HttpHeaders(header)};
  }

}
