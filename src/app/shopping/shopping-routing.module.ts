import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './component/list-product/list-product.component';
import { DetailProductComponent } from './component/detail-product/detail-product.component';

const routes: Routes = [
  {
    path: '',
    component: ListProductComponent,
    title: 'List Product',
  },
  {
    path: 'details/:id',
    loadChildren: () =>
      import('./component/detail-product/detail-product.module').then(
        (m) => m.DetailProductModule
      ),
    title: 'Detail Product',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingRoutingModule {}
