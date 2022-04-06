import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PresentationPageComponent } from './presentation-page/presentation-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SingleProductComponent } from './single-product/single-product.component';

const routes: Routes = [
  { path: 'product/:{id}', component: SingleProductComponent},
  { path: 'home', component: LandingPageComponent },
  { path: 'about', component: AboutComponent},
  { path: 'artist', component: PresentationPageComponent},
  { path: 'events', component: EventsPageComponent },
  { path: 'visitOurShop', component: ShopPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
