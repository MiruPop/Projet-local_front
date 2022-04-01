import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent }
  ,{path:'home', component: LandingPageComponent}
  ,{ path: 'about', component: AboutComponent }
  ,{ path: 'events', component: EventsPageComponent }
  ,{path: 'visitOurShop', component: ShopPageComponent}
  ,{path: 'contact', component: ContactPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}


// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes)
//   ],
//   exports: [
//     RouterModule
//   ]
// })
// export class AppRoutingModule { }