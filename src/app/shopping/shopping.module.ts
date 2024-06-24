import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ShoppingComponent } from './shopping.component';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { ListProductComponent } from './component/list-product/list-product.component';
import { ListProductModule } from './component/list-product/list-product.module';
import { DetailProductComponent } from './component/detail-product/detail-product.component';
import { DetailProductModule } from './component/detail-product/detail-product.module';

@NgModule({
  declarations: [ShoppingComponent],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    ListProductModule,
    DetailProductModule,
  ],
  providers: [],
  bootstrap: [ShoppingComponent],
})
export class ShoppingModule {}
