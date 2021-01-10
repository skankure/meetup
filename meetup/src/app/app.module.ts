import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ColorPickerModule} from 'primeng/colorpicker';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {CheckboxModule} from 'primeng/checkbox';

import {RadioButtonModule} from 'primeng/radiobutton';

import {ButtonModule} from 'primeng/button';

import {CardModule} from 'primeng/card';


import {InputTextModule} from 'primeng/inputtext';

import {RippleModule} from 'primeng/ripple';
import {TabViewModule} from 'primeng/tabview';

import {GMapModule} from 'primeng/gmap';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import {InputNumberModule} from 'primeng/inputnumber';

import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {SelectButtonModule} from 'primeng/selectbutton';

import {DividerModule} from 'primeng/divider';

import {MenubarModule} from 'primeng/menubar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ColorPickerModule,
    FormsModule,
    BrowserAnimationsModule,
    CheckboxModule,
    RadioButtonModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    RippleModule,
    TabViewModule,
    GMapModule,
    ToastModule,
    DialogModule,
    InputNumberModule,
    CalendarModule,
    DropdownModule,
    InputSwitchModule,
    SelectButtonModule,
    DividerModule,
    MenubarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
