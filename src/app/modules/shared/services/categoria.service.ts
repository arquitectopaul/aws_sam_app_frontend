import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url = "https://zvz5idgfi8.execute-api.us-east-1.amazonaws.com/prod";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  getGrupos(){
    const endpoint = `${base_url}/categorias`;
    return this.http.get(endpoint);
  }

  saveGrupo(body: any) {
    const endpoint = `${base_url}/categorias`;
    return this.http.post(endpoint, body);
  }

  updateGrupo(body: any, id: any){
    const endpoint = `${base_url}/categorias/${id}`;
    return this.http.put(endpoint, body);
  }

  deleteGrupo(id: any){
    const endpoint = `${base_url}/categorias/${id}`;
    return this.http.delete(endpoint);
  }

  getGrupoById(id: any){
    const endpoint = `${base_url}/categorias/${id}`;
    return this.http.get(endpoint);
  }


  /**
   * export excel categories
   */
  exportGrupos(){
    const endpoint = `${base_url}/categorias/export/excel`;
    return this.http.get(endpoint, {
      responseType: 'blob'
    });
  }
}
