import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { ShopService } from '../../service/shop.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(private service: ApiService, private product: ShopService) {
  }

  ngOnInit() {
    this.service.fetchApiInitCatalog().subscribe(res => {
      this.product.setAllItems(res);
      this.product.setSelectedItemsByCategory('salon');
    });
  }

  get searchingData() {
    return this.product.getSelectedItemsByCategory();
  }
}
