import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BasketPageComponent } from '../page/basket/basket-page.component';
import { CatalogComponent } from '../page/catalog/catalog.component';
import { SubmitComponent } from '../page/submit/submit.component';

const appRoutes: Routes = [
  {
    path: 'shop', component: AppComponent, children: [
      {path: 'catalog', component: CatalogComponent},
      {path: 'basket', component: BasketPageComponent},
      {path: 'submit', component: SubmitComponent},
    ]
  },
  {path: '**', redirectTo: '/shop/catalog'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {
}
