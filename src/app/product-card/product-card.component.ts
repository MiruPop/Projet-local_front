import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.buttonText = 'Acheter';
  }

  onBuyProduct() {
    this.buttonText = "Produit acheté";
    alert("produit ajouté au panier");
    this.quantity--;
  }
}
