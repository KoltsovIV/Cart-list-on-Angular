import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Item} from "../app.component";

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.sass']
})

export class ItemFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Item> = new EventEmitter<Item>()
  @ViewChild('inputItem', {static: false}) inputRef!: ElementRef;
  itemName = '';

  addPost() {
    if(this.itemName.trim()) {
      const item: Item = {
        name: this.itemName
      }
      this.onAdd.emit(item)
      this.itemName = ''
      this.inputRef.nativeElement.focus()
    }
  }



  constructor() { }

  ngOnInit(): void {
  }

}
