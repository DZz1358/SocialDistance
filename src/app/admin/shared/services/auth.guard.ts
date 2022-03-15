import { AuthService } from './auth.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private auth: AuthService,
        private router: Router
    ) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.auth.isAuth()) {
            return true
        } else {
            this.auth.logout()
            this.router.navigate(['login'], {
                queryParams: {
                    loginAgain: true
                }
            })
            return false
        }
        // throw new Error('Method not implemented.');
    }
}
