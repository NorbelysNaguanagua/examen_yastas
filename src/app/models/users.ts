export class Users { 
    nombre:string;
    email:string; 
    apellido:string; 
    dni:string;
    usuario:string;
    password:string;
    constructor( nombre:string ,email:string ,apellido:string ,dni:string,usuario:string,password:string){
        this.nombre = nombre;
        this.email = email; 
        this.apellido = apellido;
        this.dni = dni;
        this.usuario = usuario;
        this.password = password;
    }
}