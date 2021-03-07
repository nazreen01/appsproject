import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewcompPage } from './viewcomp.page';

const routes: Routes = [
  {
    path: '',
    component: ViewcompPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewcompPageRoutingModule {}
