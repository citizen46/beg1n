import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';

import { AppComponent } from './app.component';

import { BoxComponent } from './box/box.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    DatePickerModule,
    FormsModule,
    ReactiveFormsModule,
    ComboBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
