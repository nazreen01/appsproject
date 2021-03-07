import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewcompPageRoutingModule } from './viewcomp-routing.module';

import { ViewcompPage } from './viewcomp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewcompPageRoutingModule
  ],
  declarations: [ViewcompPage]
})
export class ViewcompPageModule {}
