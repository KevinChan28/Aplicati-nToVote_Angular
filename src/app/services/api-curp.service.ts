import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'x-sandbox': 'true',
    'Authorization': 'Bearer 0b3dd944-f78d-46bb-8707-1b851cb94d8d'
  })
}


@Injectable({
  providedIn: 'root'
})
export class ApiCurpService {
  private apiUrl = 'https://apimarket.mx/api/renapo/grupo/valida-curp';
  constructor(
    private http: HttpClient
  ) { }

  ValidateCurp(curp: string): Observable<any> {
    const url = `${this.apiUrl}?curp=${curp}`;
    return this.http.post<any>(url,{} ,httpOptions);
  }
}
