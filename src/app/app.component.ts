import { Component } from '@angular/core';

export interface Item {
  name:string
  id: number
}

export interface InfoMessage{
  name: string
  color: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  items: Item[] = []

    messages: InfoMessage[] = [
      {
        name:'List item successfully added',
        color: 'green'
      },
      {
        name: 'List item successfully changed',
        color: 'orange'
      },
      {
        name: 'List item was deleted',
        color: 'red'
      }
    ]

  messageIndex = -1

  updateItems(item: Item) {
    this.items.unshift(item)
    this.messageIndex = 0
    setTimeout( () => {this.messageIndex = -1}
    , 2000)
  }

  deleteItems(item: Item) {
    this.items.splice(this.items.indexOf(item), 1)
    this.messageIndex = 2
    setTimeout( () => {this.messageIndex = -1}
      , 2000)
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
    this.messageIndex = 1
    setTimeout( () => {this.messageIndex = -1}
      , 2000)
  }
}
