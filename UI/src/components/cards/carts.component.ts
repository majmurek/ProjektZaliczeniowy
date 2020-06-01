import { Component, Input, OnInit } from '@angular/core';
import { ShopService } from '../../service/shop.service';

@Component({
  selector: 'app-cards',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {
  @Input() data = [];

  constructor(private shop: ShopService) {
  }

  ngOnInit() {
  }

  get header() {
    return this.shop.getCategory();
  }
}
