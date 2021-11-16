export class UsuarioModelo{
    constructor(
        public _id: String,
        public nombre: String,
        public correo: String,
        public ciudad: String,
        public contrasena : String,
        public tipoUsuario: String,
        public nombreEmpresa: String,
        public ubicacion: String,
        public direccion : String,
        public tipo: String,
        public servicio: String,
        public planes : String,
        public mediosPago : String,
        public promociones: String,
        public compras: Array<any>,
        public estado : Boolean,
        public permisos : Boolean
           
    ){}
}