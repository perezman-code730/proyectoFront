import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';



const routes: Routes = [
  { path: 'contacto', component: ContactoComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: '',component: InicioComponent ,pathMatch:'full'},
  { path: '**', redirectTo: 'nosotros', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
