import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopService } from '../../service/shop.service';
import { Item } from '../../model/model';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.css']
})
export class BasketPageComponent implements OnInit {

  constructor(private router: Router, public shop: ShopService) {
  }

  ngOnInit() {
  }

  get allItemsFromBasket() {
    return this.shop.getItemInShop();
  }

  get sumOfShipping() {
    let sum = 0;
    this.shop.getItemInShop().forEach(item => sum = sum + item.price);
    return sum;
  }

  submitShipping() {
    this.router.navigate(['shop', 'submit']);
    this.shop.clearBasket();
  }

  deleteFromBasket(item: Item) {
    this.shop.deleteItemFromBasket(item);
  }
}
