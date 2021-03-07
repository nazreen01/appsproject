import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewcompPageRoutingModule } from './newcomp-routing.module';

import { NewcompPage } from './newcomp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewcompPageRoutingModule
  ],
  declarations: [NewcompPage]
})
export class NewcompPageModule {}
