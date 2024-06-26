import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../shared/interfaces/product.interface';

@Component({
  selector: 'list-product-item',
  // standalone: true,
  // imports: [],
  templateUrl: './list-product-item.component.html',
  styleUrl: './list-product-item.component.scss',
})
export class ListProductItemComponent {
  @Input() product!: IProduct;
  @Output() addProductToSearchBar = new EventEmitter<string>();

  onAddSearchBar(productName: string) {
    this.addProductToSearchBar.emit(productName);
  }
}
