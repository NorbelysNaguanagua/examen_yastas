import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IngredienteService } from '../../services/ingrediente.service';
@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.css'],
})
export class IngredientesComponent implements OnInit {
  panelOpenState = false;
  ListIngredient: any | null = null;
  constructor(private _ingredienteService: IngredienteService, private router: Router,) {}

  ngOnInit(): void {
    this.obtenerIngredientes();
  }
  obtenerIngredientes() {
    this._ingredienteService.getIngredientes().subscribe(
      (data) => {
        console.log('data' + data);
        const filtered = data.meals.filter(function (element: any) {
          return element.idIngredient < 25;
        });        
        this.ListIngredient = Object.values(filtered);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ver_platillo(name:string){
    console.log(name);
    this.router.navigateByUrl('/platillo/'+name);
  }
}
