import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CashoutCheckPage } from './cashout-check';

@NgModule({
  declarations: [
    CashoutCheckPage,
  ],
  imports: [
    IonicPageModule.forChild(CashoutCheckPage),
  ],
})
export class CashoutCheckPageModule {}
