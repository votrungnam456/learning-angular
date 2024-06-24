import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './list-product.component';
import { ProductService } from '../../../core/services/shopping.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ListProductComponent],
  imports: [CommonModule, RouterModule],
  exports: [ListProductComponent],
  providers: [ProductService],
})
export class ListProductModule {}
