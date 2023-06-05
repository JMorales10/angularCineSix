import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private userService: UsersService) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(localStorage.getItem('jwt')) {
      const response = await this.isRoleAdmin();
      if (response.rol === 'admin') {
        return true;
      }
    }

    this.router.navigate(['/Home'])
    return false;

  }

  async isRoleAdmin() {
    return await this.userService.roleToken(localStorage.getItem('jwt')).toPromise();
  }
}
