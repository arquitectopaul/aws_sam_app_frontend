import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url = "https://zvz5idgfi8.execute-api.us-east-1.amazonaws.com/prod";

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(private http: HttpClient) { }

  /**
   * get all Articulos
   */
  getArticulos(){

    const endpoint = `${base_url}/articulos`;
    return this.http.get(endpoint);

  }

  /**
   * save the Articulos
   */
  saveArticulo(body: any) {
    const endpoint = `${base_url}/articulos`;
    return this.http.post(endpoint, body);
  }

  /**
   * update Articulo
   */
  updateArticulo(body: any, id: any){
    const endpoint = `${base_url}/articulos/${id}`;
    return this.http.put(endpoint, body);
  }

  /**
   * update Articulo
   */
  deleteArticulo(id: any){
    const endpoint = `${base_url}/articulos/${id}`;
    return this.http.delete(endpoint);
  }

  /**
   * update Articulo
   */
  getArticuloById(id: any){
    const endpoint = `${base_url}/articulos/${id}`;
    return this.http.get(endpoint);
  }


  /**
   * export excel Articulos
   */
  exportArticulos(){
    const endpoint = `${base_url}/articulos/export/excel`;
    return this.http.get(endpoint, {
      responseType: 'blob'
    });
  }
}
