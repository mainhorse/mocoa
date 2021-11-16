import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-nav',
  templateUrl: './hotel-nav.component.html',
  styleUrls: ['./hotel-nav.component.css']
})
export class HotelNavComponent implements OnInit {

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
