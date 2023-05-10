import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { PaginaPrincipalComponent } from './vista/pagina-principal/pagina-principal.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './header/login/login.component';
import { RegisterComponent } from './header/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { PaginaPeliculasComponent } from './vista/pagina-peliculas/pagina-peliculas.component';
import { PaginaEntradasComponent } from './vista/pagina-entradas/pagina-entradas.component';
import { PaginaCompraComponent } from './vista/pagina-entradas/pagina-compra/pagina-compra.component';
import {MatTableModule} from '@angular/material/table';
import { PaginaContactoComponent } from './vista/pagina-contacto/pagina-contacto.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'src/app/shared/services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PaginaPrincipalComponent,
    LoginComponent,
    RegisterComponent,
    PaginaPeliculasComponent,
    PaginaEntradasComponent,
    PaginaCompraComponent,
    PaginaContactoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
