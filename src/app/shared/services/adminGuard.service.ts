import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private userService: UsersService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let isAdmin = false
    this.userService.roleToken(localStorage.getItem('jwt')).subscribe(
      (data: any) => {
        if(data.rol === 'admin') {
          isAdmin = true;
        }
      }
    )

    if (isAdmin) {
      return true;
    } else {
      this.router.navigate(['/Home']);
      return false;
    }
  }
}
