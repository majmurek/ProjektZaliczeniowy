import { Component, Input } from '@angular/core';
import { ShopService } from '../../service/shop.service';
import { Item } from '../../model/model';
import { timer } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() item: Item;

  constructor(public shop: ShopService) {
  }

  addItemToBasket() {
    this.shop.pushItemToBasket(this.item);
    this.shop.showAlert();
    timer(2000).subscribe(delay => {
      this.shop.hideAlert();
    });
  }

}
