import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import {AppToDoWrapper} from "./to-do/to-do-wrapper/wrapper.component";
import {AppFormComponent} from "./to-do/to-do-form/form.component";
import {AppItemComponent} from "./to-do/to-do-item/item.component";

@NgModule({
  declarations: [
    AppComponent,
    AppToDoWrapper,
    AppFormComponent,
    AppItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
