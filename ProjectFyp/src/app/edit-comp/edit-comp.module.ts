import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditCompPageRoutingModule } from './edit-comp-routing.module';

import { EditCompPage } from './edit-comp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditCompPageRoutingModule
  ],
  declarations: [EditCompPage]
})
export class EditCompPageModule {}
