import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurante-nav',
  templateUrl: './restaurante-nav.component.html',
  styleUrls: ['./restaurante-nav.component.css']
})
export class RestauranteNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  car = '../assets/img/carritoCompras.png';
  imgUser = '../assets/img/usuario.png';
  count = 0;
  estado = 0;
  datos(){
    let form = document.getElementById('dataUser');
    if(this.estado == 0){
      form.style.transform = 'rotateX(0deg)';
      this.estado = 1;
    } else{
      form.style.transform = 'rotateX(90deg)';
      this.estado = 0;
    }

  }
}
