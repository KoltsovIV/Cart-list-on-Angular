import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Item} from "../app.component";

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.sass']
})
export class ItemFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Item> = new EventEmitter<Item>()

  itemName = '';

  addPost() {
    if(this.itemName.trim()) {
      const item: Item = {
        name: this.itemName
      }
      this.onAdd.emit(item)
      this.itemName = ''
    }
  }



  constructor() { }

  ngOnInit(): void {
  }

}
