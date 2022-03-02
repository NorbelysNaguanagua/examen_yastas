import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { OnboardingComponent } from './../onboarding/onboarding.component';
import {ProductoService} from '../../services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dialog-content-example',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  idProductos : string =''
  imgProductos : string =''
  resumeProductos : string =''
  nameProductos : string =''
  
    constructor(public dialog: MatDialog,private _productosService: ProductoService,
       private router: Router,) {
  
  }
  
  ngOnInit(): void {
    this.obtenerProductos();
  }
  obtenerProductos(){
    this._productosService.getProductos().subscribe(data => { 
      
      this.openDialog(data);
    }, error => {
      console.log(error);
    })

  }
 
  openDialog(data:any) {
      this.idProductos = data.meals[0].idMeal;
    let welcomeRef = this.dialog.open(OnboardingComponent, {
      height: '750px',
      width: '750px', 
      data: {
        id:data.meals[0].idMeal,
        name: data.meals[0].strMeal,
        img:data.meals[0].strMealThumb,
        resume: data.meals[0].strInstructions,
      },
    });
    welcomeRef.afterClosed().subscribe((res) => {
      console.log("asdasdasd" +this.idProductos)
      if(res) this.router.navigateByUrl('/listar-producto/'+this.idProductos);
      //redireccion
      
    });
   
  }

  
  logout() {
    localStorage.clear();
    this.router.navigateByUrl('');
  }
}
