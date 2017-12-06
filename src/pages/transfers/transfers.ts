import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TransferProvider } from '../../providers/transfer/transfer'
import { AuthProvider } from '../../providers/auth/auth'

@IonicPage()
@Component({
  selector: 'page-transfers',
  templateUrl: 'transfers.html',
})
export class TransfersPage {
  transfers: any = {}
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private authProvider: AuthProvider,    
    private transferProvider: TransferProvider
  ) {
    this.transferProvider.getTransfers(this.authProvider.currentUserId()).snapshotChanges().subscribe(transfers=>{
      this.transfers=[];
      transfers.forEach(eachTransfer => {
        let transfer:any;
        transfer = eachTransfer
          this.transfers.push(transfer)
      })      
    })
  }
  goTo(page: string, params: any = {}){
    if (params === {}) {
      this.navCtrl.push(page)
    } else {
      this.navCtrl.push(page, params)
    }
  }
}
