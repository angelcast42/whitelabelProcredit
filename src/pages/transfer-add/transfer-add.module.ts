import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransferAddPage } from './transfer-add';

@NgModule({
  declarations: [
    TransferAddPage,
  ],
  imports: [
    IonicPageModule.forChild(TransferAddPage),
  ],
})
export class TransferAddPageModule {}
