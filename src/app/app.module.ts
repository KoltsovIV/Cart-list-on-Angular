import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemComponent } from './item/item.component';
import {FormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InformationMessageComponent } from './information-message/information-message.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemFormComponent,
    ItemComponent,
    InformationMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
