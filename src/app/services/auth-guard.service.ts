import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import {LocalStorageService} from "./localStorageService/local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private localStorageService:LocalStorageService, private router:Router) { }

  canActivate(): boolean {
    const userData = this.localStorageService.getUserDataFromLocalStorage();
    if (userData) {
      // User is authenticated, allow access
      return true;
    } else {
      // User is not authenticated, redirect to login page
      this.router.navigate(['page/other-pages/login']);
      return false;
    }
  }
}
