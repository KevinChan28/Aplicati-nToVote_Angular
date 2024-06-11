import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegisterPerson } from 'src/app/Models/CreatePerson';
import { Person } from 'src/app/Models/Person';
import { Login } from 'src/app/Models/Login';
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
export class ApiAuthService {

  private apiUrl = environment.apiUrl + '/api/Users/auth';

  private usuarioSubject: BehaviorSubject<Person | null>;
  public usuario: Observable<Person | null>;
  public get usuarioData(): Person{
      return this.usuarioSubject.value as Person;
  }

  constructor(private _http: HttpClient){
      this.usuarioSubject = new BehaviorSubject<Person | null>(JSON.parse(localStorage.getItem('persona')!)as Person);
      this.usuario = this.usuarioSubject.asObservable();
  }

  login(login: Login): Observable<Response>{
      return this._http.post<Response>(this.apiUrl, login, httpOptions).pipe(
          map(res => {
              if (res.success === true){
                  const usuario: Person = res.data;
                  localStorage.setItem('persona', JSON.stringify(usuario));
                  localStorage.setItem('section', res.data.section);
                  localStorage.setItem('state', res.data.state);
                  this.usuarioSubject.next(usuario);
              }
              return res;
          })
      );
  }
  logOut(){
      localStorage.removeItem('persona');
      this.usuarioSubject.next(null);
  }
 
}
