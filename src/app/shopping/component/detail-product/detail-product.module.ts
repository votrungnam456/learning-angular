import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailProductComponent } from './detail-product.component';
import { DetailProductRoutingModule } from './detail-product-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DetailProductComponent],
  imports: [CommonModule, DetailProductRoutingModule],
  exports: [DetailProductComponent],
})
export class DetailProductModule {}
