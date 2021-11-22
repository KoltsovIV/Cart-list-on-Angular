import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../app.component";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {

  @Input() item!: Item

  constructor() { }

  ngOnInit(): void {
  }

}
