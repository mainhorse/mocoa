import { Component, OnInit } from '@angular/core';
import {UsuarioModelo} from './../../../modelo/modelo.usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import {Router} from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-home-content-login',
  templateUrl: './home-content-login.component.html',
  styleUrls: ['./home-content-login.component.css']
})
export class HomeContentLoginComponent implements OnInit {

  public usuarioLogin  : UsuarioModelo;
  public identidad;
  mensajeModal : string ='';

  constructor(
    private usuarioServicio : UsuarioService,
    private _rote : Router
  ) { 
    this.usuarioLogin = new UsuarioModelo('','','','','','','','','','','','','','',[],true,false);
  }

  ngOnInit(): void {
  }

  verificarLogin(){
    this.usuarioServicio.ingreso(this.usuarioLogin).subscribe((response:any)=>{
      let validar = response.usuario;
      let mensaje = response.mensaje;
      this.usuarioLogin = validar;
      if(!this.usuarioLogin){
        swal('Datos invalidos');
        this.usuarioLogin = new UsuarioModelo('','','','','','','','','','','','','','',[],true,false);
      }else if(this.usuarioLogin.estado){
        let datosUsuarioSesion = new UsuarioModelo(
          this.usuarioLogin._id,
          this.usuarioLogin.nombre,
          this.usuarioLogin.correo,
          this.usuarioLogin.ciudad,
          this.usuarioLogin.contrasena,
          this.usuarioLogin.tipoUsuario,
          this.usuarioLogin.nombreEmpresa,
          this.usuarioLogin.ubicacion,
          this.usuarioLogin.direccion,
          this.usuarioLogin.tipo,
          this.usuarioLogin.servicio,
          this.usuarioLogin.planes,
          this.usuarioLogin.mediosPago,
          this.usuarioLogin.promociones,
          this.usuarioLogin.compras,
          this.usuarioLogin.estado,
          this.usuarioLogin.permisos
        );

        this.usuarioServicio.guardarSesion(datosUsuarioSesion);
        if(this.usuarioLogin.tipoUsuario = "turista"){
          this._rote.navigate(['/Turista']);
        } else if(this.usuarioLogin.tipoUsuario = "local"){
          this._rote.navigate(['Local']);
        } else if(this.usuarioLogin.tipoUsuario = "transporte"){
          this._rote.navigate(['Transporte']);
        } else if(this.usuarioLogin.tipoUsuario = "hotel"){
          this._rote.navigate(['/Hotel']);
        } else if(this.usuarioLogin.tipoUsuario = "restaurante"){
          this._rote.navigate(['/Restaurante']);
        }else if(this.usuarioLogin.tipoUsuario = "agencia"){
             this._rote.navigate(['/']);
        }else{
          
        }
        
      }

    }, err=>{
      let errConsulta = <any>err;
      if(errConsulta != null){
        console.log(errConsulta);
      }
    } )
    
  }

}
