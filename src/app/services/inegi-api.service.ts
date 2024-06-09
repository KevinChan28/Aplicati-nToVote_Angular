import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InegiApiService {


  private apiUrl = 'https://www.inegi.org.mx/app/api/denue/v1/consulta/';

  constructor(private http: HttpClient) { }

  getEstados(): Observable<any> {
    const url = `${this.apiUrl}BuscaEntidad/`;
    return this.http.get<any>(url);
  }

  getMunicipiosPorEstado(estado: string): Observable<any> {
    const url = `${this.apiUrl}BuscaMunicipio/${estado}`;
    return this.http.get<any>(url);
  }
}
