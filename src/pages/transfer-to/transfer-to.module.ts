import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransferToPage } from './transfer-to';

@NgModule({
  declarations: [
    TransferToPage,
  ],
  imports: [
    IonicPageModule.forChild(TransferToPage),
  ],
})
export class TransferToPageModule {}
