import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot} from '@angular/router';
import { ApiAuthService } from '../services/APIBASE/apiUser/api-auth.service';

@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate {

    constructor(private router: Router , private apiAuthService: ApiAuthService){}

    canActivate(route: ActivatedRouteSnapshot) {
        const usuario = this.apiAuthService.usuarioData;

        console.log('AuthGuard: usuarioData', usuario); // Agregar log para verificar el usuario

        if (usuario) {
          return true;
        }
    
        console.log('AuthGuard: No hay usuario autenticado, redirigiendo a login');
        this.router.navigate(['/login']);
        return false;
      }
}