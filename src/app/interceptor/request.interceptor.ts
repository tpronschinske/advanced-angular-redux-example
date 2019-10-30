import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).do(resp => {
      if (resp instanceof HttpResponse) {

        if(resp.status !== 200){
          console.log('======== ERROR ========');
          console.log(resp);
        }
      }
    });

  }
}
