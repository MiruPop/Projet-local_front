import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../models/artist.model';
import { Product } from '../models/product.model';
import { ArtistsService } from '../services/artists.service';

@Component({
  selector: 'app-presentation-page',
  templateUrl: './presentation-page.component.html',
  styleUrls: ['./presentation-page.component.scss']
})
export class PresentationPageComponent implements OnInit {

  products: Product[];
  // @Input() artist: Artist;
  
  constructor() { }

  ngOnInit(): void {
  }
}
