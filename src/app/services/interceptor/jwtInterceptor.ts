// import {
//     HttpEvent,
//     HttpHandler,
//     HttpInterceptor,
//     HttpRequest,
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Injectable } from '@angular/core';
//
// @Injectable({
//     providedIn: 'root',
// })
// export class AuthInterceptor implements HttpInterceptor {
//     intercept(
//         req: HttpRequest<any>,
//         next: HttpHandler
//     ): Observable<HttpEvent<any>> {
//         const token = localStorage.getItem('authtoken');
//         if (token) {
//             const cloned = req.clone({
//                 headers: req.headers.set('Authentication', 'Bearer ' + token),
//             });
//             return next.handle(cloned);
//         } else {
//             return next.handle(req);
//         }
//     }
// }