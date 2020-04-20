import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import 'b-library/main';
import { MyContactListComponent } from './my-contact-list/my-contact-list.component'
import {HttpClientModule} from '@angular/common/http';
import { NewMessageFormComponent } from './new-message-form/new-message-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MyContactListComponent,
    NewMessageFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class AppModule { }
