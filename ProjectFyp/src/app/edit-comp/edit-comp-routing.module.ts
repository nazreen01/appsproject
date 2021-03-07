import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditCompPage } from './edit-comp.page';

const routes: Routes = [
  {
    path: '',
    component: EditCompPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditCompPageRoutingModule {}
