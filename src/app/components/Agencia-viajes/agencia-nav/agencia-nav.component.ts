import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agencia-nav',
  templateUrl: './agencia-nav.component.html',
  styleUrls: ['./agencia-nav.component.css']
})
export class AgenciaNavComponent implements OnInit {

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
