import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPhoneConfirmPage } from './register-phone-confirm';

@NgModule({
  declarations: [
    RegisterPhoneConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPhoneConfirmPage),
  ],
})
export class RegisterPhoneConfirmPageModule {}
