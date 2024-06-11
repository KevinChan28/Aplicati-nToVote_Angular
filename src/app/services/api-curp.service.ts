import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'x-sandbox': 'true',
    'Authorization': `Bearer ${environment.apiKeyCurp}`,
  })
}


@Injectable({
  providedIn: 'root'
})
export class ApiCurpService {
  private apiUrl = environment.apiCurp;
  constructor(
    private http: HttpClient
  ) { }

  ValidateCurp(curp: string): Observable<any> {
    const url = `${this.apiUrl}?curp=${curp}`;
    return this.http.post<any>(url,{} ,httpOptions);
  }
}
