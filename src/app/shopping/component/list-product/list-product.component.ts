import {
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { IProduct } from '../../../shared/interfaces/product.interface';
import { ProductService } from '../../../core/services/shopping.service';

@Component({
  selector: 'app-list-product',
  // standalone: true,
  // imports: [],
  templateUrl: './list-product.component.html',
  // đây là External Stylesheet
  styleUrl: './list-product.component.scss',
  // đây là Internal Stylesheet
  styles: [
    `
      // h1 {
      //   color: red;
      // }
      // p {
      //   color: blue;
      // }
      // h2 {
      //   color: green !important;
      // }
    `,
  ],
  // Emulated (mặc định): Angular tạo ra các thuộc tính độc đáo cho các style của component, giúp các style này chỉ ảnh hưởng đến component đó.
  // None: Style của component sẽ ảnh hưởng đến toàn bộ ứng dụng, tương tự như global styles.
  // Shadow DOM: Sử dụng Shadow DOM của trình duyệt để áp dụng các style chỉ cho component đó.
  encapsulation: ViewEncapsulation.Emulated,
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
