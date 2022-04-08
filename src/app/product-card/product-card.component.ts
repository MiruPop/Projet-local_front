import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;

  id: number;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  artist: string;
  price: number;
  quantity: number;
  imageURL: string;

  buttonText: string;

  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }

  onBuyProduct() {
    alert("produit ajouté au panier");
    this.buttonText = "Produit acheté"
    this.quantity--;
  }

  onSelectProduct() {
    const productId = this.productsService.getProductById(this.product.id);
    //   if (!product) {
    //     throw new Error('Produit introuvable!');
    // } else {
    //     return product;
    // }
    this.router.navigateByUrl(`product/${this.product.id}`);
  }
}
