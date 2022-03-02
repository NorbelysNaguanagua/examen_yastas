import { Component, Inject, OnInit,Optional } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
 import { Producto } from './../../models/producto';
 
@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {
  producto: any;
 
 
  constructor(   public dialogRef: MatDialogRef<OnboardingComponent>,
      @Optional()
      @Inject(MAT_DIALOG_DATA)
      public data: Producto, 
    ){ 
    this.producto = { ...data };
 
   
  }  

  ngOnInit(): void {
    
  }
  
  doAction(){
    this.dialogRef.close({event:'Redirect',data:this.producto});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }


}
