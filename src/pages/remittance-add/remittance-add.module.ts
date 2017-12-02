import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RemittanceAddPage } from './remittance-add';

@NgModule({
  declarations: [
    RemittanceAddPage,
  ],
  imports: [
    IonicPageModule.forChild(RemittanceAddPage),
  ],
})
export class RemittanceAddPageModule {}
