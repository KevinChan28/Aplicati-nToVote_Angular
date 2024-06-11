import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegisterPerson } from 'src/app/Models/CreatePerson';
import { RegisterVote } from 'src/app/Models/RegisterVote';
import { Response } from 'src/app/Models/response';
import { registerDocument } from 'src/app/Models/registerDocument';

const httpOptions = {
  headers: new HttpHeaders({
    'Contend-Type': 'application/json'
    //'Authorization': 
  })
}


@Injectable({
  providedIn: 'root'
})
export class ApiDocumentSercice {

  private apiUrl = environment.apiUrl + '/api/Documents'

  constructor(
    private _http: HttpClient
  ) { }

  registerDocument(file: registerDocument): Observable<any> {
    return this._http.post<any>(this.apiUrl,file ,httpOptions);
  }

  getDocuments():Observable<Response>{
    return this._http.get<any>(this.apiUrl,httpOptions);
  }

}
