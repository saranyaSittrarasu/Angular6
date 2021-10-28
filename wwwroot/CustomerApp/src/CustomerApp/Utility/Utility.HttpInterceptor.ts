import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,HttpResponse } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs'

@Injectable()
export class MyInterceptor implements HttpInterceptor{
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    request=request.clone({
        setHeaders:{
            'securityKey': 'key123'
        }
    });
    return next.handle(request);
}
}