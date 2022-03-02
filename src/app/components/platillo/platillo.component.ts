import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IngredienteService } from 'src/app/services/ingrediente.service'; 


interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-platillo',
  templateUrl: './platillo.component.html',
  styleUrls: ['./platillo.component.css']
})
export class PlatilloComponent implements OnInit {
  ListIngredientPlatillo: any | null = null;
  name:string = '';
  foods: Food[] = [
    {value: 'Beef', viewValue: 'Beef'},
    {value: 'Chicken', viewValue: 'Chicken'},
    {value: 'Mozzarella', viewValue: 'Mozzarella'},
    {value: 'Yogurt', viewValue: 'Yogurt'},
    {value: 'Parmesan', viewValue: 'Parmesan'}, 
  ];
  images: Array<any> = []
  constructor(private _ingredienteService: IngredienteService,
    private route: ActivatedRoute, private router: Router,) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name')! || '';
    if(this.name !=='') {
      console.log("------111-----")
      this.getIngredientesPlatillo(this.name);
     }else{
       console.log("------222------")
      this.obtenerIngredientesPlatilloAleatorios();
    }
  }
  
  getIngredientesPlatillo(name:string) {
 
    console.log("getIngredientesPlatillo" + name)
    this._ingredienteService.getIngredientesPlatillo(name).subscribe(
      (data) => {
        console.log('data' + data);       
        this.ListIngredientPlatillo = Object?.values(data.meals);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  obtenerIngredientesPlatilloAleatorios() {
    this.images = [
      {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
      {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'},
      {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
      {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
      {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}
    ];
    this._ingredienteService.getPlatillosAleatorios().subscribe(
      (data) => { 
        this.ListIngredientPlatillo = Object.values(data.meals);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ver_detalle(id:string){ 
    this.router.navigateByUrl('/listar-producto/'+id);
  }
}
