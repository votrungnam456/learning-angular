import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductItemComponent } from './list-product-item.component';
import { IProduct } from '../../../shared/interfaces/product.interface';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from '../../../core/directives/hoverHightlight.directive';

@NgModule({
  declarations: [ListProductItemComponent],
  imports: [CommonModule, RouterModule, HighlightDirective],
  exports: [ListProductItemComponent],
})
export class ListProductItemModule {}
