import { Component } from '@angular/core';

export interface Item {
  name:string
  id: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  items: Item[] = [
    {
      name: 'bread',
      id: 1
    },
    {
      name: 'milk',
      id: 2
    }
  ]

  updateItems(item: Item) {
    this.items.unshift(item)
  }

  deleteItems(item: Item) {
    this.items.splice(this.items.indexOf(item), 1)
  }
}
