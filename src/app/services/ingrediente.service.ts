import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class IngredienteService {
  url = 'https://www.themealdb.com/api/json/v1/1/';

  constructor(private http: HttpClient) {}

  getIngredientes(): Observable<any> {
    return this.http.get(this.url + 'list.php?i=list');
  }
  getIngredientesPlatillo(name: string): Observable<any> {
    return this.http.get(this.url + `filter.php?i=${name}`);
  }
  getPlatillosAleatorios(): Observable<any> {
    return this.http.get(this.url + `random.php`);
  }
}
