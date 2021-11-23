import {Component, Input, OnInit} from '@angular/core';
import {InfoMessage} from "../app.component";


@Component({
  selector: 'app-information-message',
  templateUrl: './information-message.component.html',
  styleUrls: ['./information-message.component.sass']
})
export class InformationMessageComponent implements OnInit {

  @Input() message!: InfoMessage

  constructor() { }

  ngOnInit(): void {
  }

}
