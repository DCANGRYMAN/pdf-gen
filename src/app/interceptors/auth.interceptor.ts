// src/app/interceptors/auth.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwtToken = 'fake-jwt-token-123'; // Aqui você pode colocar um token dinâmico se quiser

    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${jwtToken}`
      }
    });

    return next.handle(cloned);
  }
}
