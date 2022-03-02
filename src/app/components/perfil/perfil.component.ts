import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  user:any;
  constructor(private router: Router,) { }

  ngOnInit(): void {
    const userJson = localStorage.getItem('user');
    this.user = userJson != null ? JSON.parse(userJson) :'' 
  
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('');
  }
}
