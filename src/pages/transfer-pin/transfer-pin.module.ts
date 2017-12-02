import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransferPinPage } from './transfer-pin';

@NgModule({
  declarations: [
    TransferPinPage,
  ],
  imports: [
    IonicPageModule.forChild(TransferPinPage),
  ],
})
export class TransferPinPageModule {}
