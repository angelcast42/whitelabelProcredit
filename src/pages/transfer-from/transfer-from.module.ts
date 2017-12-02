import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransferFromPage } from './transfer-from';

@NgModule({
  declarations: [
    TransferFromPage,
  ],
  imports: [
    IonicPageModule.forChild(TransferFromPage),
  ],
})
export class TransferFromPageModule {}
