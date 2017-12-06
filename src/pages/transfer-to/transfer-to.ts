import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountProvider } from '../../providers/account/account'
import { ThirdaccountProvider } from '../../providers/thirdaccount/thirdaccount'
import { AuthProvider } from '../../providers/auth/auth'

@IonicPage()
@Component({
  selector: 'page-transfer-to',
  templateUrl: 'transfer-to.html',
})
export class TransferToPage {
  accounts
  thirdaccounts
  accountFrom: any = null
  transfer
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private authProvider: AuthProvider,    
    private accountProvider: AccountProvider,
    private thirdAccountProvider: ThirdaccountProvider
  ) {
    if(this.navParams.data.transfer) {
      this.transfer = this.navParams.data.transfer
      if (this.transfer.accountFrom){
        this.accountFrom = this.transfer.accountFrom
      }
    } else {
      this.accountFrom = null
    }
    console.log('accountFrom: ', this.accountFrom)
    this.accountProvider.getAccounts(this.authProvider.currentUserId()).snapshotChanges().subscribe(accounts=>{
      this.accounts=[];
      accounts.forEach(eachAccount => {
        let account:any;
        account = eachAccount
        console.log('account: ', this.accountFrom.key)
        if (this.accountFrom != null && this.accountFrom.key == account.key) {
          
        } else {
          this.accounts.push(account)
        }
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
  transferAdd(thirdaccount) {
    this.goTo('TransferAddPage', {
      accountFrom: this.accountFrom,
      accountTo: thirdaccount
    })
  }
}