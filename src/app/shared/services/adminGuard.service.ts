import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Verificar si el usuario es un administrador
    const isAdmin = ".";// Verificación de administrador

    if (isAdmin) {
      return true;
    } else {
      this.router.navigate(['/unauthorized']); // Ruta de acceso no autorizado
      return false;
    }
  }
}
