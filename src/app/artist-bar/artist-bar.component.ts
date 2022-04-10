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
  }

}
