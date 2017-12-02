import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CashoutAmountPage } from './cashout-amount';

@NgModule({
  declarations: [
    CashoutAmountPage,
  ],
  imports: [
    IonicPageModule.forChild(CashoutAmountPage),
  ],
})
export class CashoutAmountPageModule {}
