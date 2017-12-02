import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompleteAddressPage } from './complete-address';

@NgModule({
  declarations: [
    CompleteAddressPage,
  ],
  imports: [
    IonicPageModule.forChild(CompleteAddressPage),
  ],
})
export class CompleteAddressPageModule {}
