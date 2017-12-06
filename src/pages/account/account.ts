import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { TransferProvider } from '../../providers/transfer/transfer'
import { AuthProvider } from '../../providers/auth/auth'

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  account
  transfers
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private authProvider: AuthProvider,    
    private transferProvider: TransferProvider
  ) {
    this.account = this.navParams.data.account
    console.log("cuenta",this.account.key)    
    this.transferProvider.getTransfersAccount(this.account.key).snapshotChanges().subscribe(transfers=>{
      console.log('transfers: ', transfers)
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