import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationEnd } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class entradaGuard {

  constructor(private router: Router) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    let prevUrl;

    if(window.history.state) {
      prevUrl = window.history.state.prevUrl;
    }

    if((prevUrl && prevUrl.includes('peliculas')) || state.url.includes('/entradas')) {
      return true;
    }

    this.router.navigate(['/Home'])

    return false;
  }

}
