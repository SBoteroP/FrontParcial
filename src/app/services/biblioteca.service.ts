import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  private urlApi = 'http://localhost:8080/bibliotecas/';

  constructor(private http: HttpClient) {

  }
  public getBlibliotecas(): Observable<any[]> {
    return this.http.get<any[]>(this.urlApi);
  }
  public agregarBiblioteca(nombre: string, direccion: string,ciudad: string): Observable<any> {
    const nuevaBiblio = { nombre,direccion,ciudad};
    return this.http.post(this.urlApi, nuevaBiblio);
  }

}
