import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from "../app.component";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {

  @Output() onDel: EventEmitter<Item> = new EventEmitter<Item>()
  @Input() item!: Item

  crossedToggle = false

  delItem() {
    this.onDel.emit(this.item)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
