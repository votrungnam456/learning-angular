import { Injectable } from '@angular/core';
import { HousingLocation } from '../../shared/interfaces/housing-location.interface';
import { DATA_LIST_PRODUCT } from '../../shared/constants';
import { IProduct } from '../../shared/interfaces/product.interface';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'http://localhost:3000/locations';
  async getAllListProduct(): Promise<IProduct[]> {
    // const data = await fetch(this.url);
    // return (await data.json()) ?? [];
    return (await DATA_LIST_PRODUCT.products) ?? [];
  }
  async getProductById(id: string): Promise<IProduct | undefined> {
    // const data = await fetch(this.url);
    // const locations = (await data.json()) ?? [];
    const locations = DATA_LIST_PRODUCT.products;
    const result = locations.find((product: IProduct) => product.id === id);
    return result;
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    // tslint:disable-next-line
    console.log(firstName, lastName, email);
  }
}
