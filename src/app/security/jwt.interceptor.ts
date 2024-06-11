import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiAuthService } from "../services/APIBASE/apiUser/api-auth.service";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private apiAuthService: ApiAuthService){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const usuario = this.apiAuthService.usuarioData;
        const excludedUrl = environment.apiCurp; // URL del servicio que quieres excluir

        if (usuario && !request.url.includes(excludedUrl)) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${usuario.token}`
                }
            });
        }
        return next.handle(request);
    }
}
