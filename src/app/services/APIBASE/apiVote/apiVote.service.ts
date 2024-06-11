import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegisterPerson } from 'src/app/Models/CreatePerson';
import { RegisterVote } from 'src/app/Models/RegisterVote';
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
export class ApiVoteSercice {

  private apiUrl = environment.apiUrl + '/api/Votes'

  constructor(
    private _http: HttpClient
  ) { }

  registerVote(vote: RegisterVote): Observable<any> {
    return this._http.post<any>(this.apiUrl,vote ,httpOptions);
  }

  getVotesGraphic(): Observable<Response> {
    return this._http.get<any>(this.apiUrl + '/graphic', httpOptions);
  }
  getVotesGraphicAdmin(): Observable<Response> {
    return this._http.get<any>(this.apiUrl + '/admin/graphic', httpOptions);
  }
}
