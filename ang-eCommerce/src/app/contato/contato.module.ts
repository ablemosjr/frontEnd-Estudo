import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskPipe, NgxMaskDirective, provideNgxMask } from 'ngx-mask';

import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './contato.component';

@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [provideNgxMask()]
})
export class ContatoModule { }
