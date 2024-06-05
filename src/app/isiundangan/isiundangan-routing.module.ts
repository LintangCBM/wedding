import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsiundanganPage } from './isiundangan.page';

const routes: Routes = [
  {
    path: '',
    component: IsiundanganPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IsiundanganPageRoutingModule {}
