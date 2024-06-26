import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../core/services/shopping.service';
import { IProduct } from '../../../shared/interfaces/product.interface';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-detail-product',
  // standalone: true,
  // imports: [],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.scss',
})
export class DetailProductComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productService = inject(ProductService);
  product: IProduct | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });
  constructor() {
    const productId = this.route.snapshot.params['id'];
    console.log(productId);
    this.productService.getProductById(productId).then((product) => {
      this.product = product;
    });
  }

  submitApplication() {
    // this.housingService.submitApplication(
    //   this.applyForm.value.firstName ?? '',
    //   this.applyForm.value.lastName ?? '',
    //   this.applyForm.value.email ?? ''
    // );
  }
}
