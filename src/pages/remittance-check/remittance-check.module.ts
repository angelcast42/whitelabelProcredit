import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RemittanceCheckPage } from './remittance-check';

@NgModule({
  declarations: [
    RemittanceCheckPage,
  ],
  imports: [
    IonicPageModule.forChild(RemittanceCheckPage),
  ],
})
export class RemittanceCheckPageModule {}
