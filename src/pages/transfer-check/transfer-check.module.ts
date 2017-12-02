import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransferCheckPage } from './transfer-check';

@NgModule({
  declarations: [
    TransferCheckPage,
  ],
  imports: [
    IonicPageModule.forChild(TransferCheckPage),
  ],
})
export class TransferCheckPageModule {}
