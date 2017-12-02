import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RemittancePage } from './remittance';

@NgModule({
  declarations: [
    RemittancePage,
  ],
  imports: [
    IonicPageModule.forChild(RemittancePage),
  ],
})
export class RemittancePageModule {}
