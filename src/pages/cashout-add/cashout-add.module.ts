import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CashoutAddPage } from './cashout-add';

@NgModule({
  declarations: [
    CashoutAddPage,
  ],
  imports: [
    IonicPageModule.forChild(CashoutAddPage),
  ],
})
export class CashoutaddPageModule {}
