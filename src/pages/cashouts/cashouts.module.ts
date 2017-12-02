import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CashoutsPage } from './cashouts';

@NgModule({
  declarations: [
    CashoutsPage,
  ],
  imports: [
    IonicPageModule.forChild(CashoutsPage),
  ],
})
export class CashoutsPageModule {}
