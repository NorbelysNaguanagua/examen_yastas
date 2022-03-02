import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import {ProductoService} from '../../services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
 productoForm: FormGroup;

  constructor(private fb: FormBuilder,private router:Router,
    private toastr: ToastrService,
    private _productoService:ProductoService) {

    this.productoForm = this.fb.group({
      producto: ['',Validators.required],
      categoria: ['',Validators.required],
      ubicacion: ['',Validators.required],
      precio: ['',Validators.required],
    })
   }

  ngOnInit(): void {
  }
  agregarproducto(){
    console.log('agregar producto')
 
/*
    const PRODUCTO : Producto = {
      nombre :this.productoForm.get('producto')?.value,  
      categoria:this.productoForm.get('categoria')?.value,
      ubicacion:this.productoForm.get('ubicacion')?.value,
      precio:this.productoForm.get('precio')?.value
    }*/
    //console.log(PRODUCTO)
   // this._productoService.guardarProducto(PRODUCTO)
    this.toastr.success('El producto fue registrado con exito!', 'Producto Registrado!');
    this.router.navigate(['/'])
  } 
}
