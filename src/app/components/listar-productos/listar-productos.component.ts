import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute, Router } from '@angular/router'; 
import {ProductoService} from '../../services/producto.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  strCategory : string ='';
  strMeal :  string ='';
  strMealThumb : string ='';
  id: string = '';
  strInstructions: string = '';
  strArea : string = '';
  strTags : string = '';
  strYoutube : string = '';
  constructor(private _productosService: ProductoService, 
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer
    ) {  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.obtenerProductosid(this.id);
  }

  obtenerProductosid(id:string){
    this._productosService.getProductosId(id).subscribe(data => {
      console.log("data" +data);
      this.strCategory = data.meals[0].strCategory; 
      this.strMeal = data.meals[0].strMeal; 
      this.strMealThumb = data.meals[0].strMealThumb; 
      this.strInstructions = data.meals[0].strInstructions; 
      this.strArea = data.meals[0].strArea;
      this.strTags = data.meals[0].strTags;
      this.strYoutube = data.meals[0].strYoutube;
    }, error => {
      console.log(error);
    })
  } 
  getVideoIframe(url:string) {
    var video, results; 
    if (url === null) {  return '';    }    
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1]; 
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
  }

}
