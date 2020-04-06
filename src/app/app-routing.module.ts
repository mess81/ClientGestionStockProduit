import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ProduitResolver } from './produit/resolver';

export const AppRoutes: Routes = [
  { 
    path: 'produit', 
    component: ProduitComponent,
    resolve: {
      produit: ProduitResolver
    }
  },
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
  exports: [RouterModule ],
  providers: [ProduitResolver]
})
export class AppRoutingModule { }
