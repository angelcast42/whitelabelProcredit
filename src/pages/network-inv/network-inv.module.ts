import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NetworkInvPage } from './network-inv';

@NgModule({
  declarations: [
    NetworkInvPage,
  ],
  imports: [
    IonicPageModule.forChild(NetworkInvPage),
  ],
})
export class NetworkInvPageModule {}
