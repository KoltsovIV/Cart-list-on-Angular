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
      name: 'qw',
      id: 1
    },
    {
      name: 'qwer',
      id: 2
    }
  ]

  updateItems(item: Item) {
    this.items.unshift(item)
  }

  deleteItems(item: Item) {
    this.items.splice(this.items.indexOf(item), 1)
  }

  editItems(item: Item) {
    let index = -1
    for(let i = 0; i < this.items.length; i++) {
      if(this.items[i].id === item.id) {
        index = i;
        break;
      }
    }
    this.items.splice(index, 1, item)
  }
}
