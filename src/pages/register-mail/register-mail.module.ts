import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterMailPage } from './register-mail';

@NgModule({
  declarations: [
    RegisterMailPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterMailPage),
  ],
})
export class RegisterMailPageModule {}
