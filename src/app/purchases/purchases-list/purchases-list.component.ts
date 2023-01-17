import { Component } from '@angular/core';
import { Purchases } from '../purchases.model';

@Component({
  selector: 'app-purchases-list',
  templateUrl: './purchases-list.component.html',
  styleUrls: ['./purchases-list.component.css']
})
export class PurchasesListComponent {

  constructor() {
    this.randomPurchases();
  }

  purchases: Purchases[] = [];

  randomPurchases() {
    for (let i = 0; i < 5; i++) {
      this.purchases.push(new Purchases ('{date}', '{cardName}', 30, 123, 'https://logos-world.net/wp-content/uploads/2021/05/Air-Canada-Logo-700x394.png'));
    }
  }

}
