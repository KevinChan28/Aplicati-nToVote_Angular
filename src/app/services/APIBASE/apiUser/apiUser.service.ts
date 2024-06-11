import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegisterPerson } from 'src/app/Models/CreatePerson';

const httpOptions = {
  headers: new HttpHeaders({
    'Contend-Type': 'application/json'
    //'Authorization': 
  })
}


@Injectable({
  providedIn: 'root'
})
export class ApiUser {

  private apiUrl = environment.apiUrl + '/api/Users'

  constructor(
    private _http: HttpClient
  ) { }

  registerPerson(person: RegisterPerson): Observable<any> {
    return this._http.post<any>(this.apiUrl,person ,httpOptions);
  }

  registerFuncionario(person: RegisterPerson): Observable<any> {
    return this._http.post<any>(this.apiUrl + '/officer',person ,httpOptions);
  }
}
