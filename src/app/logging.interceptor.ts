import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, tap, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { UIService } from './service/ui-service';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor(private uiService : UIService) {}
  intercept(request : HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Outgoing HTTP request', request, 'token :', this.uiService.token);
     request = request.clone({
              setHeaders: {
                  'Authorization': `Bearer ${this.uiService.token}`,
                  'Content-Type' : 'application/json; charset=utf-8',
                  'Accept': 'application/json'

              }})
     console.log('Outgoing HTTP request 2 ', request, 'token :', this.uiService.token);

    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        console.log('Incoming HTTP response', event);
      })
    );
  }
}
