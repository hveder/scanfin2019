import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(    ) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {



        if (request.url.indexOf('/web/de/secure/start' ) !== -1) {

            request = request.clone({ headers:
                    request.headers.set( 'Content-Type', 'application/json')
                        .set('Accept', 'text/html' )
                        .set('Access-Control-Allow-Origin', '*' )
                        .set('Access-Control-Allow-Methods', 'POST, GET, PUT, OPTIONS, DELETE, PATCH' )
                        .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-auth,Content-Type, Content-Range, Content-Disposition, Content-Description' )
                        .set('x-api-key', 'EvuHxr7P9F1AR9kAKBrow1p44Gpab65p2jXgeqIK'),

                responseType : 'text'
            });
        } else {
            console.log(request.params);
            request = request.clone({ headers:
                    request.headers.set( 'Content-Type', 'application/json')
                        .set('Accept', 'text/html, application/xhtml+xml, application/json, application/xml;q=0.9, */*;q=0.8'     )
                        .set('Access-Control-Allow-Origin', '*' )
                        .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-auth,Content-Type, Content-Range, Content-Disposition, Content-Description' )
                        .set('Access-Control-Allow-Methods', 'POST, GET, PUT, OPTIONS, DELETE, PATCH' )
                        .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-auth' )
                        .set('x-api-key', 'EvuHxr7P9F1AR9kAKBrow1p44Gpab65p2jXgeqIK' ),
                params : request.params});
        }


        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                   // console.log('event--->>>', event);
                    // this.errorDialogService.openDialog(event);
                }


                return event;
            }),
            catchError((error: any) => {
                let data = {};
               /* data = {
                    reason: error && error.error.reason ? error.error.reason : '',
                    status: error.status
                }*/
                console.log(error);
                //this.errorDialogService.openDialog(data);
                return throwError(error);
            }));
    }
}
