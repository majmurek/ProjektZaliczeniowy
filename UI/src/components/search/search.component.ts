import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShopService } from '../../service/shop.service';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
 @ViewChild('searchInput', {static: true}) searchInput: ElementRef;
  constructor(public service: ApiService, private shop: ShopService) {
  }

  ngOnInit() {
  }

  searchingData() {
    this.service.fetchApiInitCatalog(this.searchInput.nativeElement.value).subscribe(
      res => this.shop.setItemsForSearchingText(res));
  }

  filterItem(category: string) {
    this.shop.setSelectedItemsByCategory(category);
  }
}
