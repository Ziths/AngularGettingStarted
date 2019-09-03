import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

// Component Decorator
@Component({
  selector: 'custom-products',
  templateUrl: './product-list.component.html',
  styleUrls: [ './product-list.component.css', ],
})
export class ProductListComponent implements OnInit {
// Class Properties
  titleSuffix: string = 'Shop';
  pageTitle: string = 'Any' + ' ' +  this.titleSuffix;
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string;

  // Using custom interface IProduct for strong typing
  products: IProduct[];
  filteredProducts: IProduct[];

// Class Constructor
  constructor(private productService: ProductService) { }

// Getters & Setters
  // TypeScript lacks runtime encapsulation, the underscore means internal property/variable.
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.search(this.listFilter) : this.products;
  }

// Functions
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  // Angular's build-in Lifecycle hook onInit
  ngOnInit(): void {
    console.log('Hello World!');

    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => {
        this.errorMessage = err;
      }
    });
  }

  search(query: string): IProduct[] {
    query = query.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(query) !== -1);
  }

  onRatingClicked(message: string): void {
    alert(message);
  }
}
