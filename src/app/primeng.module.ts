import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [],
  exports: [
    InputTextModule,
    InputNumberModule,
    InputSwitchModule,
    ToolbarModule,
    ButtonModule,
    RippleModule,
    MenuModule,
    CardModule,
    RadioButtonModule,
    CheckboxModule,
    MessagesModule
  ],
  imports: [
    CommonModule
  ]
})
export class PrimengModule { }
