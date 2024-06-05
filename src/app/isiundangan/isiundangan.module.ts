import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IsiundanganPageRoutingModule } from './isiundangan-routing.module';

import { IsiundanganPage } from './isiundangan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IsiundanganPageRoutingModule,
  ],
  declarations: [IsiundanganPage],
})
export class IsiundanganPageModule {}
