import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-artist-bar',
  templateUrl: './artist-bar.component.html',
  styleUrls: ['./artist-bar.component.scss']
})
export class ArtistBarComponent implements OnInit {

  products: Product[];

  constructor() { }

  ngOnInit(): void {
    this.products = [
      {
        id : 1,
        title : "Jade",
        subtitle : "Cadre, 30x40 cm",
        description : "Realisé d’après une création de collage originale. Imprimé sur papier fine art william Turner en série limitée",
        category : "Décoration",
        artist : "Malodepaname",
        price : 60.0,
        quantity : 5,
        imageURL : "/assets/images/elodie2.jpg"
      },
      {
        id : 2,
        title : "Lulu",
        subtitle : "Pins, 3x3 cm",
        description : "Realisé d’après une création de collage originale.",
        category : "Bijoux",
        artist : "Malodepaname",
        price : 5.0,
        quantity : 10,
        imageURL : "/assets/images/elodie3.jpg"
      },
      {
        id : 3,
        title : "Smile",
        subtitle : "Housse de coussin, 45x45 cm",
        description : "Realisé d’après une création de collage originale. Imprimé sur cotton 100%.",
        category : "Décoration",
        artist : "Malodepaname",
        price : 50.0,
        quantity : 10,
        imageURL : "/assets/images/elodie4.jpg"
      }
    ];
  }

}
