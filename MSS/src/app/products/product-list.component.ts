import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

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

  // Using custom interface IProduct for strong typing
  products: IProduct[] = [
    {
      productId: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2019',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.2,
      imageUrl: 'assets/images/leaf_rake.png',
    },
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2019',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'assets/images/garden_cart.png',
    },
    {
      productId: 5,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      releaseDate: 'May 21, 2019',
      description: 'Curved claw steel hammer',
      price: 8.9,
      starRating: 4.8,
      imageUrl: 'assets/images/hammer.png',
    },
    {
      productId: 8,
      productName: 'Saw',
      productCode: 'TBX-0022',
      releaseDate: 'May 15, 2019',
      description: '15-inch steel blade hand saw',
      price: 11.55,
      starRating: 3.7,
      imageUrl: 'assets/images/saw.png',
    },
    {
      productId: 10,
      productName: 'Video Game Controller',
      productCode: 'GMG-0042',
      releaseDate: 'October 15, 2018',
      description: 'Standard two-button video game controller',
      price: 35.95,
      starRating: 4.6,
      imageUrl: 'assets/images/xbox-controller.png',
    }
  ];

  filteredProducts: IProduct[];

// Class Constructor
  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = '';
  }

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
  }

  search(query: string): IProduct[] {
    query = query.toLocaleLowerCase();
    return this.products.filter( (product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(query) !== -1);
  }
}
