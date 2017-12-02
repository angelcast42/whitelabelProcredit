import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountAddPage } from './account-add';

@NgModule({
  declarations: [
    AccountAddPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountAddPage),
  ],
})
export class AccountAddPageModule {}
