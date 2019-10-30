import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './views/product/product.component';


const routes: Routes = [
  { path: '', component: ProductComponent},
  { path: 'product', component: ProductComponent},
  { path: '**', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
