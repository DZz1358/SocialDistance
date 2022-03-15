import { AuthService } from './auth.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {

    isCheck(){
        if (this.auth.isAuth()) {
            return true
        } else {
            this.auth.logout()
            this.router.navigate(['/admin' , 'login'], {
                queryParams: {
                    loginAgain: true
                }
            })
            return false
        }
    }

    constructor(
        private auth: AuthService,
        private router: Router
    ) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.isCheck();
        // throw new Error('Method not implemented.');
    }
}
