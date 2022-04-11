import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artist } from '../models/artist.model';

@Component({
  selector: 'app-artist-caption',
  templateUrl: './artist-caption.component.html',
  styleUrls: ['./artist-caption.component.scss']
})
export class ArtistCaptionComponent implements OnInit {

  @Input() artist!: Artist;

  constructor() { }

  ngOnInit(): void {
  }

}
