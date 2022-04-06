import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// MDB Modules
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { ArtistBarComponent } from './artist-bar/artist-bar.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ArtistCardComponent } from './artist-card/artist-card.component';
import { ModalComponent } from './modal/modal.component';
import { PresentationPageComponent } from './presentation-page/presentation-page.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ArtistCaptionComponent } from './artist-caption/artist-caption.component';
import { FactureMailComponent } from './facture-mail/facture-mail.component';
import { PaymentModalComponent } from './payment-modal/payment-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    FooterComponent,
    ArtistBarComponent,
    ProductCardComponent,
    CarouselItemComponent,
    AboutComponent,
    LandingPageComponent,
    EventsPageComponent,
    ShopPageComponent,
    ContactPageComponent,
    ArtistCardComponent,
    ModalComponent,
    PresentationPageComponent,
    SingleProductComponent,
    ShoppingCartComponent,
    ArtistCaptionComponent,
    FactureMailComponent,
    PaymentModalComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    registerLocaleData(fr.default);
  }
}
