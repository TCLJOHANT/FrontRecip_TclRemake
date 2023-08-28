import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const API_URL = environment.url; //url del backend

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(
    private httpClient:HttpClient) 
    {}
  // Utiliza la propiedad 'url' del objeto 'environment' para obtener la URL base de la API
  getApiUrl(): string {
    return environment.url;
  }
  //metodos http (GET,POST,PUT,DELETE)
  public delete(url: String) {
    return this.httpClient.delete(API_URL + url);
  }
}


