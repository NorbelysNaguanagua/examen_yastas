import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingsModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http';
//material angular
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card'; 
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
  

//componentes
import { AppComponent } from './app.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { IngredientesComponent } from './components/ingredientes/ingredientes.component';
import { PlatilloComponent } from './components/platillo/platillo.component';
import { PerfilComponent } from './components/perfil/perfil.component';

//carrousel 

const materialComponents = [ 
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule, 
  MatSelectModule, 
  MatCheckboxModule,  
  MatListModule,
  MatIconModule, 
  MatSidenavModule, 
  MatCardModule,
  MatExpansionModule,
  MatGridListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,  
  MatDialogModule,
  MatTableModule,
  MatTabsModule, 
];
@NgModule({
  declarations: [
    AppComponent,
    CrearProductoComponent,
    ListarProductosComponent,
    LoginComponent,
    WelcomeComponent,
    OnboardingComponent,
    IngredientesComponent,
    PlatilloComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ...materialComponents, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
