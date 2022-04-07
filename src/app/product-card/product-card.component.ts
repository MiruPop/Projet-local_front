import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

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

  ngOnInit(): void {
    this.id = 1;
    this.title = "Jade";
    this.subtitle = "Cadre, 30x40 cm"
    this.description = "Realisé d’après une création de collage originale. Imprimé sur papier fine art william Turner en série limitée";
    this.category = "Décoration";
    this.artist = "Malodepaname";
    this.price = 60.0;
    this.quantity = 5;
    this.imageURL = "/assets/images/elodie2.jpg";
    this.buttonText = "ACHETER"
  }

  onBuyProduct() {
    alert("produit ajouté au panier");
    this.buttonText = "Produit acheté"
    this.quantity --;
  }
}
