import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentCheckPage } from './payment-check';

@NgModule({
  declarations: [
    PaymentCheckPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentCheckPage),
  ],
})
export class PaymentCheckPageModule {}
