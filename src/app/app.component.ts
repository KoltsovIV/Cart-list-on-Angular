import {Component, OnInit} from '@angular/core';

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
export class AppComponent implements OnInit {

  ngOnInit() {
    this.items = this.items = JSON.parse(localStorage.getItem('items_collection') || '{}')
  }

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
        name: 'List item successfully deleted',
        color: 'red'
      },
      {
        name: 'Item list successfully cleared',
        color: 'red'
      }
    ]

  messageIndex = -1

  putItemsToLocalStorage() {
    localStorage.setItem('items_collection', JSON.stringify(this.items))
  }

  updateItems(item: Item) {
    this.items.unshift(item)
    this.putItemsToLocalStorage()
    this.messageIndex = 0
    setTimeout( () => {this.messageIndex = -1}
    , 2000)
  }

  deleteItems(item: Item) {
    this.items.splice(this.items.indexOf(item), 1)
    this.putItemsToLocalStorage()
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
    this.putItemsToLocalStorage()
    this.messageIndex = 1
    setTimeout( () => {this.messageIndex = -1}
      , 2000)
  }

  clearList() {
    if(confirm("Are you sure to clear cart list?")) {
      this.items.splice(0)
      this.putItemsToLocalStorage()
      this.messageIndex = 3
      setTimeout( () => {this.messageIndex = -1}
        , 2000)
    }
  }
}
