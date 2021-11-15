import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './components/Home/home-page/home-page.component';
import {HomeContentRegisterComponent} from './components/Home/home-content-register/home-content-register.component';
import {HomeContentLoginComponent} from './components/Home/home-content-login/home-content-login.component';
import {TuristaPageComponent} from './components/Turista/turista-page/turista-page.component';
import {LocalPageComponent} from './components/Local/local-page/local-page.component';
import {TransportePageComponent} from'./components/Transporte/transporte-page/transporte-page.component';
import {HotelPageComponent} from './components/Hoteleria/hotel-page/hotel-page.component';
import {RestaurantePageComponent} from './components/Restaurante/restaurante-page/restaurante-page.component';
import {AgenciaPageComponent} from './components/Agencia-viajes/agencia-page/agencia-page.component';


const routes: Routes = [
  {path: '', component : HomePageComponent},
  {path :'Registro', component: HomeContentRegisterComponent},
  {path: 'Ingreso', component: HomeContentLoginComponent},
  {path: 'Turista', component: TuristaPageComponent},
  {path: 'Local', component : LocalPageComponent},
  {path: 'Transporte', component : TransportePageComponent},
  {path: 'Hotel', component: HotelPageComponent},
  {path: 'Restaurante', component: RestaurantePageComponent},
  {path: 'Agencia', component: AgenciaPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
