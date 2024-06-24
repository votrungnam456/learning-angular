import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductItemComponent } from '../list-product-item/list-product-item.component';
import { DetailProductComponent } from './detail-product.component';

const routes: Routes = [
  {
    path: '',
    component: DetailProductComponent,
    // title: 'Detail Product',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailProductRoutingModule {}
