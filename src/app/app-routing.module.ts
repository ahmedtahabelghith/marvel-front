import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { MatFormFieldModule } from '@angular/material/form-field';


const routes: Routes = [
  {
    path: '', redirectTo: '/acceuil', pathMatch: 'full'
  },
  {
    path: 'acceuil', component: CharactersComponent
  },
  {
    path: 'characters', component: AcceuilComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    MatFormFieldModule
  ],

  exports: [RouterModule, MatFormFieldModule]
})
export class AppRoutingModule { }
