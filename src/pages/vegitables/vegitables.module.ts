import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VegitablesPage } from './vegitables';

@NgModule({
  declarations: [
    VegitablesPage,
  ],
  imports: [
    IonicPageModule.forChild(VegitablesPage),
  ],
})
export class VegitablesPageModule {}
