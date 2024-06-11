import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegisterParty } from 'src/app/Models/registerParty';
import { Response } from 'src/app/Models/response';

const httpOptions = {
  headers: new HttpHeaders({
    'Contend-Type': 'application/json'
    //'Authorization': 
  })
}


@Injectable({
  providedIn: 'root'
})
export class ApiPartyService{

  private apiUrl = environment.apiUrl + '/api/Partys'

  constructor(
    private _http: HttpClient
  ) { }

  registerParty(party: RegisterParty): Observable<Response> {
    return this._http.post<any>(this.apiUrl,party ,httpOptions);
  }

  getPartys(): Observable<Response> {
    return this._http.get<any>(this.apiUrl, httpOptions);
  }
}
