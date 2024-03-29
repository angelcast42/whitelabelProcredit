import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountProvider } from '../../providers/account/account'
import { AuthProvider } from '../../providers/auth/auth'
import { UserProvider } from '../../providers/user/user';
import { TransferProvider } from '../../providers/transfer/transfer';
import { TransferModel } from '../../models/transfer/transfer'

@IonicPage()
@Component({
  selector: 'page-transfer-pin',
  templateUrl: 'transfer-pin.html',
})
export class TransferPinPage {
  amount: string = '';
  inputAmount: string = ''
  transfer:TransferModel
  transaction
  code
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private accountProvider: AccountProvider ,
    public userProvider: UserProvider,       
    public transferProvider: TransferProvider,                  
    private authProvider: AuthProvider       
  ) {
    this.transaction=navParams.data.transfer
    this.transfer=this.transferProvider.newTransfer()
    this.code=this.navParams.data.code
  }
  append(item: string) {
    if (item == 'backspace') {
      if (this.inputAmount.length < 1){
        this.inputAmount = ''
        this.amount = ''
      } else if (this.inputAmount.indexOf('.') > -1) {
        let backspace = this.inputAmount.split('.')
  
        if (backspace[1] != undefined && backspace[1].length > 1){
          backspace[1] = backspace[1].substr(0,(backspace[1].length-1))
          this.inputAmount = backspace[0]+'.'+backspace[1]
          this.amount = this.inputAmount
        } else if (backspace[1] != undefined && backspace[1].length == 1) {
          this.inputAmount = backspace[0]+'.';
          this.amount = this.inputAmount
        } else {
          this.inputAmount = this.inputAmount.substr(0,(this.inputAmount.length-1))
          this.amount = this.inputAmount
        }
      } else {
        this.inputAmount = this.inputAmount.substr(0,(this.inputAmount.length-1))
        this.amount = this.inputAmount
      }
  
      if (this.inputAmount == '') {
        this.inputAmount = '';
      }
    } else {
  
      if (this.inputAmount.indexOf('.') < 0) {
        if (item != '.' && this.inputAmount == '') {
          this.inputAmount = '';
        }
  
        this.inputAmount += item;
      } else {
        let amount = this.inputAmount.split('.');
        if (amount[1].length < 2 && item != '.'){
          this.inputAmount += item;
        }
      }
  
      this.amount = this.inputAmount;
    }
  }
  goTo(page: string){
    if(this.inputAmount===this.code){
      this.accountProvider.getAccount(this.transaction.accountTo.payload.val().number).snapshotChanges().subscribe(accounts=>{
        if(accounts.length>0){
          this.userProvider.getUser().then(user=>{
            if(accounts[0].payload.val().owner!=this.authProvider.currentUserId()){
              this.userProvider.sendPush(accounts[0].payload.val().tokencf,'Transferencias','El usuario '+user.name+' te ha realizado una transferencia de '+this.transaction.amount+'.')
            }
          })
        }
        this.transfer.amount= this.transaction.amount
        this.transfer.sendBy=this.authProvider.currentUserId()
        this.transfer.sendFrom=this.transaction.accountFrom.payload.val().number
        this.transferProvider.create(this.transfer,this.transaction)
        this.navCtrl.setRoot(page)
      })
    }
    else{
      this.authProvider.presentToast('Pin incorrecto, por favor verifica.')
      console.log("codigo incorrecto")
    }
  }

}

