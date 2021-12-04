import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/compartido/local-storage.service';
import { SeguridadService } from '../services/compartido/seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {

  constructor(
    private localStorageService: LocalStorageService,
    private seguridadService: SeguridadService,
    private router: Router
  ) {

  }

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   let tk = this.localStorageService.getToken();
  //   if (tk != "") {
  //     return true;
  //   }
  //   this.router.navigate(["/home"]);
  //   return false;
  // }

   canActivate(
     route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     let tk = false;
     return new Promise(async (resolve, reject) => {
       this.seguridadService.VerificarToken().subscribe({
         next: async (data: boolean) => {
           tk = data;
           console.log(tk);
           if (tk) {
             resolve(true);
             return true;
           }
           this.router.navigate(["/seguridad/login"]);
           resolve(false);
           return false;
         }
       });
     });
   }

}
