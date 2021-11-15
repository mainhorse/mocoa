import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UsuarioService} from './servicios/usuario.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { HomePageComponent } from './components/Home/home-page/home-page.component';
import { HomePageNavComponent } from './components/Home/home-page-nav/home-page-nav.component';
import { HomePageSearchComponent } from './components/Home/home-page-search/home-page-search.component';
import { HomeContentPageComponent } from './components/Home/home-content-page/home-content-page.component';
import { HomeContentRegisterComponent } from './components/Home/home-content-register/home-content-register.component';
import { HomeContentLoginComponent } from './components/Home/home-content-login/home-content-login.component';
import { HotelNavComponent } from './components/Hoteleria/hotel-nav/hotel-nav.component';
import { HotelPageComponent } from './components/Hoteleria/hotel-page/hotel-page.component';
import { HotelMainComponent } from './components/Hoteleria/hotel-main/hotel-main.component';
import { AgenciaNavComponent } from './components/Agencia-viajes/agencia-nav/agencia-nav.component';
import { AgenciaMainComponent } from './components/Agencia-viajes/agencia-main/agencia-main.component';
import { AgenciaPageComponent } from './components/Agencia-viajes/agencia-page/agencia-page.component';
import { RestauranteNavComponent } from './components/Restaurante/restaurante-nav/restaurante-nav.component';
import { RestauranteMainComponent } from './components/Restaurante/restaurante-main/restaurante-main.component';
import { RestaurantePageComponent } from './components/Restaurante/restaurante-page/restaurante-page.component';
import { TransporteNavComponent } from './components/Transporte/transporte-nav/transporte-nav.component';
import { TransporteMainComponent } from './components/Transporte/transporte-main/transporte-main.component';
import { TransportePageComponent } from './components/Transporte/transporte-page/transporte-page.component';
import { LocalNavComponent } from './components/Local/local-nav/local-nav.component';
import { LocalMainComponent } from './components/Local/local-main/local-main.component';
import { LocalPageComponent } from './components/Local/local-page/local-page.component';
import { TuristaNavComponent } from './components/Turista/turista-nav/turista-nav.component';
import { TuristaMainComponent } from './components/Turista/turista-main/turista-main.component';
import { TuristaPageComponent } from './components/Turista/turista-page/turista-page.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomePageNavComponent,
    HomePageSearchComponent,
    HomeContentPageComponent,
    HomeContentRegisterComponent,
    HomeContentLoginComponent,
    HotelNavComponent,
    HotelPageComponent,
    HotelMainComponent,
    AgenciaNavComponent,
    AgenciaMainComponent,
    AgenciaPageComponent,
    RestauranteNavComponent,
    RestauranteMainComponent,
    RestaurantePageComponent,
    TransporteNavComponent,
    TransporteMainComponent,
    TransportePageComponent,
    LocalNavComponent,
    LocalMainComponent,
    LocalPageComponent,
    TuristaNavComponent,
    TuristaMainComponent,
    TuristaPageComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
