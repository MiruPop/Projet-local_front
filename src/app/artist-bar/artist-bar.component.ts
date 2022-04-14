import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-artist-bar',
  templateUrl: './artist-bar.component.html',
  styleUrls: ['./artist-bar.component.scss']
})
export class ArtistBarComponent implements OnInit {

  sampleProducts: Product[];

  constructor(private service : ProductsService) { }

  ngOnInit(): void {
    this.getSampleProducts();
  }

  getSampleProducts() {
    this.sampleProducts = this.service.getAllProducts().slice(0,3);
  }

}
