import { Injectable } from '@angular/core';
import { Item } from '../model/model';

@Injectable({
  providedIn: 'root'
})

export class ShopService {
  selectedItem: Item[] = [];
  allItems: Item[] = [];
  selectedItemsByCategoryOrSearching: Item[] = [];
  selectedCategory = 'salon';
  alert = false;

  constructor() {
  }

  pushItemToBasket(item: Item) {
    this.selectedItem.push(item);
  }

  getItemInShop() {
    return this.selectedItem;
  }

  clearBasket() {
    this.selectedItem = [];
  }

  setAllItems(items: Item[]) {
    this.allItems = items;
  }

  getAllItems() {
    return this.allItems;
  }

  deleteItemFromBasket(item: Item) {
    this.selectedItem = this.selectedItem.filter(
      (selectedItem: Item) => selectedItem.id !== item.id);
  }

  getAlert() {
    return this.alert;
  }

  setSelectedItemsByCategory(category: string) {
    this.selectedCategory = category;
    this.selectedItemsByCategoryOrSearching = this.filterItemsByCategory(this.allItems, category);
  }

  getSelectedItemsByCategory() {
    return this.selectedItemsByCategoryOrSearching;
  }

  getCategory() {
    return this.selectedCategory;
  }

  setItemsForSearchingText(items: Item[]) {
    this.selectedCategory = 'Wszystkie';
    this.selectedItemsByCategoryOrSearching = items;
  }

  private filterItemsByCategory(data: Item[], category: string): Item[] {
    return data.filter(i => i.category === category);
  }

  showAlert() {
    this.alert = true;
  }

  hideAlert() {
    this.alert = false;
  }
}
