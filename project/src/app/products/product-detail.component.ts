import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: [ './product-detail.component.css' ]
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail: ';
  product: IProduct;

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    // Shorthand +variabale converts a string in a numerical
    let id = +this.route.snapshot.paramMap.get('id');
    this.product = {
      productId: id,
      productName: 'Sample Product',
      productCode: 'AAA-1000',
      releaseDate: 'January 1, 2001',
      description: 'This is a sample product used for testing purposes.',
      price: 1.00,
      starRating: 5,
      imageUrl: 'https://via.placeholder.com/150'
    };

    // When backticks, dollor sign with brackets means variable
    this.pageTitle += `(${id})`;
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
