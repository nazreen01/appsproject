import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewcompPage } from './newcomp.page';

const routes: Routes = [
  {
    path: '',
    component: NewcompPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewcompPageRoutingModule {}
