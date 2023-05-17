import { AuthGuard } from './shared/services/authGuard.service';
import { PaginaPeliculasComponent } from './vista/pagina-peliculas/pagina-peliculas.component';
import { PaginaPrincipalComponent } from './vista/pagina-principal/pagina-principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './header/login/login.component';
import { RegisterComponent } from './header/register/register.component';
import { PaginaEntradasComponent } from './vista/pagina-entradas/pagina-entradas.component';
import { PaginaCompraComponent } from './vista/pagina-entradas/pagina-compra/pagina-compra.component';
import { PaginaContactoComponent } from './vista/pagina-contacto/pagina-contacto.component';

const routes: Routes = [
  { path: 'Home', component: PaginaPrincipalComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'peliculas', component: PaginaPeliculasComponent},
  { path: 'entradas', component: PaginaEntradasComponent, canActivate: [AuthGuard]},
  { path: 'compra', component: PaginaCompraComponent, canActivate: [AuthGuard]},
  { path: 'contact', component: PaginaContactoComponent},
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', component: PaginaPrincipalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
