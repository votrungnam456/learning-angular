import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { IProduct } from '../../../shared/interfaces/product.interface';
import { ProductService } from '../../../core/services/shopping.service';

@Component({
  selector: 'app-list-product',
  // standalone: true,
  // imports: [],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.scss',
})
export class ListProductComponent {
  @ViewChild('filter') filter: ElementRef<HTMLInputElement> | null = null;
  productList: IProduct[] = [];
  productService: ProductService = inject(ProductService);
  filteredProductList: IProduct[] = [];
  // search = '';
  constructor() {
    this.productService.getAllListProduct().then((productList: IProduct[]) => {
      this.productList = productList;
      this.filteredProductList = productList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredProductList = this.productList;
      return;
    }
    this.filteredProductList = this.productList.filter((product) =>
      product?.name.toLowerCase().includes(text.toLowerCase())
    );
  }
  // onInput(event: any) {
  //   this.search = event.target.value;
  // }
  addProductToSearchBar(productName: string) {
    (this.filter?.nativeElement as HTMLInputElement).value = productName;
  }
  clearFilter() {
    this.filterResults('');
    (this.filter?.nativeElement as HTMLInputElement).value = '';
  }
}
