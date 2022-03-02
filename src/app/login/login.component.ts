import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { AuthService } from '../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Users } from '../models/users';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  public usersList : Array<Users> ; 
  form = this.fb.group({
    username: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[^`~!#$%\^&*()={}|[\]\\:';"<>?,/]*$/),
      ],
    ],
    password: ['', [Validators.required, Validators.minLength(4)]], 
  });
  isTFA: boolean = false;
  isErrors: boolean = false;
  errors: string = ''; 
  attempts: number = 0;
  loading: boolean = false;
  msg :string = '';
  constructor(   private router: Router,
    private fb: FormBuilder,  private toastr : ToastrService) { 
      this.usersList = [
        new Users('Administrador','administrador@yastas.com','','00000','user','root'),
        new Users('Norbelys','norbelys@yastas.com','Naguanagua','00000','norbe','norbe1234'),
      ]}

  ngOnInit(): void {
  }
  async login() {
    console.log("login")
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.form.get('password')?.setErrors(null);
    this.isErrors = false;
    this.errors = '';
  

    const username = this.form.get('username')?.value?.toLowerCase();
    const password = this.form.get('password')?.value;
 
    const filtered = this.usersList.filter(function(element){
      return element.usuario === username;
    });
    console.log(filtered)
    if (filtered.length > 0) {
      console.log("existe el usuario " + filtered[0].password) 
      this.isErrors = filtered[0].password === password ? false : true;
      if(! this.isErrors){
          this.toastr.success("Bienvenido a la plataforma","Exito")
          localStorage.setItem(
            'user',
            JSON.stringify(filtered)
          );
          this.router.navigateByUrl('/welcome');
        }else{
          this.toastr.error("El password es inválido","Falló autenticación")
        }
    } else{ 
      this.toastr.error("El usuario no existe","Falló autenticación")
    }
   

    this.attempts++;
 
  }
  
  get username() {
    return this.form.get('username');
  }
  
 
  hasError(fieldname: string) {
    return (
      (this.form.get(fieldname)?.touched || this.form.get(fieldname)?.dirty) &&
      this.form.get(fieldname)?.invalid
    );
  }

}
