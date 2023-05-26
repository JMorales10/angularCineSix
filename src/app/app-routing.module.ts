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
import { PeliculasAdminComponent } from './vista/paginas-admin/peliculas-admin/peliculas-admin.component';
import { UsuariosAdminComponent } from './vista/paginas-admin/usuarios-admin/usuarios-admin.component';
import { SalasAdminComponent } from './vista/paginas-admin/salas-admin/salas-admin.component';
import { AdminGuard } from './shared/services/adminGuard.service';

const routes: Routes = [
  { path: 'Home', component: PaginaPrincipalComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'peliculas', component: PaginaPeliculasComponent},
  { path: 'entradas', component: PaginaEntradasComponent, canActivate: [AuthGuard]},
  { path: 'compra', component: PaginaCompraComponent, canActivate: [AuthGuard]},
  { path: 'userAdmin', component: UsuariosAdminComponent, canActivate: [AdminGuard]},
  { path: 'peliculasAdmin', component: PeliculasAdminComponent, canActivate: [AdminGuard]},
  { path: 'salasAdmin', component: SalasAdminComponent, canActivate: [AdminGuard]},
  { path: 'contact', component: PaginaContactoComponent},
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', component: PaginaPrincipalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
