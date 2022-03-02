import { NgModule } from "@angular/core"; 
import { RouterModule, Routes } from '@angular/router';
//componentes
import { LoginComponent} from "./login/login.component";
import { ListarProductosComponent } from "./components/listar-productos/listar-productos.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { PlatilloComponent } from "./components/platillo/platillo.component";
import { IngredientesComponent } from "./components/ingredientes/ingredientes.component";
import { PerfilComponent } from "./components/perfil/perfil.component";
const routes:Routes = [ 
    {path: '',component:LoginComponent},
    {path: 'welcome',component:WelcomeComponent},
    {path: 'listar-producto/:id',component:ListarProductosComponent},
    {path: 'platillo/:name',component:PlatilloComponent},
    {path: 'platillo',component:PlatilloComponent},
    {path: 'ingredientes',component:IngredientesComponent},
    {path: 'perfil',component:PerfilComponent},
    {path: '**', redirectTo:'',pathMatch:'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingsModule {}