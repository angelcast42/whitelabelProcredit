import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterBlockPasswordConfirmPage } from './register-block-password-confirm';

@NgModule({
  declarations: [
    RegisterBlockPasswordConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterBlockPasswordConfirmPage),
  ],
})
export class RegisterBlockPasswordConfirmPageModule {}
