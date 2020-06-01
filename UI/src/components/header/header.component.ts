import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../service/shop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public shop: ShopService, private router: Router) {
  }

  ngOnInit() {
  }

  get countItemInBasket() {
    return this.shop.getItemInShop().length;
  }

  get showAlert() {
    return this.shop.getAlert();
  }

  goToBasket() {
    this.router.navigate(['shop', 'basket']);
  }

  goToLogin(): void {
    window.location.href = 'http://localhost:8080/login';
  }
}
