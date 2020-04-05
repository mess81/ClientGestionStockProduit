import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { DashbordComponent } from './dashbord/dashbord.component';

export const AppRoutes: Routes = [
  { path: 'produit', component: ProduitComponent},
  { path: 'dashbord', component: DashbordComponent},
  { path: '', redirectTo: '/dashbord',pathMatch: 'full'}
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      AppRoutes,
      {enableTracing: true}
    )
  ],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
