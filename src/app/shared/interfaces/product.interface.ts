export interface IProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  quantityInStock: number;
  description: string;
  supplier: ISupplier;
}

export interface ISupplier {
  name: string;
  contactNumber: string;
  address: string;
}
