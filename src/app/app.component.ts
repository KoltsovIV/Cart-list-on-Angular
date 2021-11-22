import { Component } from '@angular/core';

export interface Item {
  name:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Cart-list';

  items: Item[] = [
    {name: 'eggs'},
    {name: 'bread'}
  ]

  updateItems(item: Item) {
    this.items.unshift(item)
  }

}
