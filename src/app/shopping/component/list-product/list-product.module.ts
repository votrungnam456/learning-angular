import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './list-product.component';
import { ProductService } from '../../../core/services/shopping.service';
import { RouterModule } from '@angular/router';
import { ListProductItemModule } from '../list-product-item/list-product-item.module';
import { ListProductItemComponent } from '../list-product-item/list-product-item.component';
import { HighlightDirective } from '../../../core/directives/hoverHightlight.directive';

@NgModule({
  declarations: [ListProductComponent],
  imports: [
    CommonModule,
    RouterModule,
    ListProductItemModule,
    HighlightDirective,
  ],
  exports: [ListProductComponent],
  providers: [ProductService],
})
export class ListProductModule {}
