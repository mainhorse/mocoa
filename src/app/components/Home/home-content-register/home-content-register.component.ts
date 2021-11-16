import { Component, OnInit } from '@angular/core';
import {UsuarioModelo} from './../../../modelo/modelo.usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import {Router} from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-home-content-register',
  templateUrl: './home-content-register.component.html',
  styleUrls: ['./home-content-register.component.css']
})
export class HomeContentRegisterComponent implements OnInit {

  public usuarioRegistro  : UsuarioModelo;
  public identidad;
  mensajeModal : string ='';

  constructor(
    private usuarioServicio : UsuarioService,
    private _router : Router
  ) {
    this.usuarioRegistro = new UsuarioModelo('','','','','','','','','','','','','','',[],true,false);

   }

  ngOnInit(): void {
  }

  registrarUsuario(){

    this.usuarioServicio.Registro(this.usuarioRegistro).subscribe((response : any)=>{
      let usuario = response.usuario;
      let mensaje = response.mensaje;
      this.usuarioRegistro = usuario;

      if(!this.usuarioRegistro){
        swal("No se pudo crear el usuario, vuelva a intentarlo", this.mensajeModal);
        this.usuarioRegistro = new UsuarioModelo('','','','','','','','','','','','','','',[],true,false);
      }else{
        swal("Registro exitoso", this.mensajeModal, 'success');
        this.usuarioRegistro = new UsuarioModelo('','','','','','','','','','','','','','',[],true,false);
      }
    }, err=>{
      let errMensaje = <any>err;
      if(!errMensaje != null){
          console.log(errMensaje);
        }
    });
  }

}
