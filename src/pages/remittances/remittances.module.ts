import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RemittancesPage } from './remittances';

@NgModule({
  declarations: [
    RemittancesPage,
  ],
  imports: [
    IonicPageModule.forChild(RemittancesPage),
  ],
})
export class RemittancesPageModule {}
