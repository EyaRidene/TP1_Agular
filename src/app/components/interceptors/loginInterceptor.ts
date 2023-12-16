import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class loginInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      // puisque req est un objet immutable on la clone pour ajouter le token
      const cloneReq = req.clone({
        params: new HttpParams().set('access_token', token),
      });
      return next.handle(cloneReq);
    } else {
      return next.handle(req);
    }
  }
}

export const loginInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: loginInterceptor,
  multi: true,
};
