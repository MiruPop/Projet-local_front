import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistCaptionComponent } from './artist-caption.component';

describe('ArtistCaptionComponent', () => {
  let component: ArtistCaptionComponent;
  let fixture: ComponentFixture<ArtistCaptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistCaptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistCaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
