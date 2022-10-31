/* Creado a mano (click derecho New File en vez de poner ng g class interceptor-service en la terminal (cmd) en la carpeta D:\FIQ\cursos\2022 Argentina Programa Parte II\Proyecto Integrador\Proyecto_RomeraCarmona\Frontend\src\app\service) */

import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService {
  constructor(private tokenService: TokenService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let intReq = req;
    const token = this.tokenService.getToken();
    if (token != null) {
      intReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer' + token),
      });
    }
    return next.handle(intReq);
  }
}

export const interceptorProvider = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true,
  },
];
