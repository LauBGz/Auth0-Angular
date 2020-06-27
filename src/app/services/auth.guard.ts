import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService){}

    canActivate(
        //Ruta a la que queremos acceder
        next: ActivatedRouteSnapshot,
        //State es el estado actual
        state: RouterStateSnapshot): Observable<boolean> {
        return this.auth.isAuthenticated$;
  }
}
