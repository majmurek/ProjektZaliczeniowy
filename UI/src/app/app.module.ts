import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { SearchComponent } from '../components/search/search.component';
import { ApiService } from '../service/api.service';
import { HttpClientModule } from '@angular/common/http';
import { CartsComponent } from '../components/cards/carts.component';
import { CardComponent } from '../components/card/card.component';
import { ShopService } from '../service/shop.service';
import { BasketPageComponent } from '../page/basket/basket-page.component';
import { ShopRoutingModule } from './shop-routing.module';
import { CatalogComponent } from '../page/catalog/catalog.component';
import { SubmitComponent } from '../page/submit/submit.component';
import { MapComponent } from '../components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CartsComponent,
    CardComponent,
    BasketPageComponent,
    CatalogComponent,
    SubmitComponent,
    MapComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ShopRoutingModule
  ],
  providers: [ApiService, ShopService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
