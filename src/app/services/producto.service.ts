import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs/internal/Observable';
 

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
url = 'https://www.themealdb.com/api/json/v1/1/';

  constructor(private http:HttpClient) { }

  getProductos() :Observable<any>{
     return this.http.get(this.url+'search.php?s=Arrabiata')
  }

  //Buscar platillo por Id
  getProductosId(id:string) :Observable<any>{
    return this.http.get(this.url+`lookup.php?i=${id}`)
 }
  eliminarProducto(id:string) :Observable<any>{
    return this.http.delete(this.url+id)
 }
 
}
