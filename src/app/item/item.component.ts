import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from "../app.component";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {

  @Output() onDel: EventEmitter<Item> = new EventEmitter<Item>()
  @Output() onEdit: EventEmitter<Item> = new EventEmitter<Item>()
  @Input() item!: Item

  crossedToggle = false
  visibilityToggle = true
  editItemName = ''



  editItem() {
    if(this.editItemName.trim()) {
      const item: Item = {
        name: this.editItemName,
        id: this.item.id
      }
      this.onEdit.emit(item)
    }
  }

  delItem() {
    this.onDel.emit(this.item)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
