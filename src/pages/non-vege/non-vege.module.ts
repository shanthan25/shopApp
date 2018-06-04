import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NonVegePage } from './non-vege';

@NgModule({
  declarations: [
    NonVegePage,
  ],
  imports: [
    IonicPageModule.forChild(NonVegePage),
  ],
})
export class NonVegePageModule {}
