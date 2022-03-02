import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs/internal/Observable';
//import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
url = 'http://localhost:4000/api/productos/';
//public usersList : Array<Users> ;

  constructor(private http:HttpClient) {
 /*   this.usersList = [
      new Users('Administrador','administrador@yastas.com','','00000','user','root'),
      new Users('Norbelys','norbelys@yastas.com','Naguanagua','00000','norbe','norbe1234'),
    ]*/
   }
/*
  getProductos() :Observable<any>{
     return this.http.get(this.url)
  }
  eliminarProducto(id:string) :Observable<any>{
    return this.http.delete(this.url+id)
 }
 guardarProducto(producto:Users) :Observable<any>{
  return this.http.post(this.url, producto)
}*//*
autenticatedUser(users:Users) :Observable<any>{
  return this.http.post(this.url, users)
}
getUsers() :Observable<any>{
  return this.http.get(this.url)
}*/
}
