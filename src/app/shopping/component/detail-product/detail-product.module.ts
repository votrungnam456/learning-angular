import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailProductComponent } from './detail-product.component';
import { DetailProductRoutingModule } from './detail-product-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DetailProductComponent],
  imports: [CommonModule, DetailProductRoutingModule, ReactiveFormsModule],
  exports: [DetailProductComponent],
})
export class DetailProductModule {}
