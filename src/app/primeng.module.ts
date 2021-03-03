import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenuModule } from 'primeng/menu';


@NgModule({
  declarations: [],
  exports: [
    InputTextModule,
    ToolbarModule,
    ButtonModule,
    RippleModule,
    MenuModule,
  ],
  imports: [
    CommonModule
  ]
})
export class PrimengModule { }
