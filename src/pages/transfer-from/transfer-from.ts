import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountProvider } from '../../providers/account/account'
import { ThirdaccountProvider } from '../../providers/thirdaccount/thirdaccount'
import { AuthProvider } from '../../providers/auth/auth'

@IonicPage()
@Component({
  selector: 'page-transfer-from',
  templateUrl: 'transfer-from.html',
})
export class TransferFromPage {
  accounts
  thirdaccounts
  accountTo: null
  transfer
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private authProvider: AuthProvider,    
    private accountProvider: AccountProvider,
    private thirdAccountProvider: ThirdaccountProvider
  ) {
    console.log('holi: ',this.navParams.data)
    if(this.navParams.data.transfer) {
      this.transfer = this.navParams.data.transfer
      console.log('transfer: ', this.transfer)
      if (this.transfer.accountTo){
        this.accountTo = this.transfer.accountTo
        console.log('accountTo: ', this.accountTo)
      }
    }
    this.accountProvider.getAccounts(this.authProvider.currentUserId()).snapshotChanges().subscribe(accounts=>{
      this.accounts=[];
      accounts.forEach(eachAccount => {
        let account:any;
        account = eachAccount
        console.log('account: ', account.key)
          this.accounts.push(account)
      })      
    })    
    this.thirdAccountProvider.getThirdaccounts(this.authProvider.currentUserId()).snapshotChanges().subscribe(thirdaccounts=>{
      this.thirdaccounts=[];
      thirdaccounts.forEach(eachAccount => {
        let thirdaccount:any;
        thirdaccount = eachAccount
          this.thirdaccounts.push(thirdaccount)
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
  transferAdd(account) {
    this.goTo('TransferAddPage', {
      accountTo: this.accountTo,
      accountFrom: account
    })
  }
}
