import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountProvider } from '../../providers/account/account'
import { AuthProvider } from '../../providers/auth/auth'
import { UserProvider } from '../../providers/user/user';
import { PaymentProvider } from '../../providers/payment/payment';
import { Payment } from '../../models/payment/payment'

@IonicPage()
@Component({
  selector: 'page-payment-pin',
  templateUrl: 'payment-pin.html',
})
export class PaymentPinPage {
  amount: string = '';
  inputAmount: string = ''
  payment:Payment
  transaction
  code
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private accountProvider: AccountProvider ,
    public userProvider: UserProvider,       
    public paymentProvider: PaymentProvider,                  
    private authProvider: AuthProvider   
  ) {
    this.transaction=navParams.data.transfer
    this.payment=this.paymentProvider.newPayment()
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
              this.userProvider.sendPush(accounts[0].payload.val().tokencf,'Pago de servicios','Pago realizado por un monto de '+this.transaction.amount+'.')
            }
          })
        }
        this.payment.amount= this.transaction.amount
        this.payment.payBy=this.authProvider.currentUserId()
        this.payment.payFrom=this.transaction.accountFrom.payload.val().number
        this.paymentProvider.create(this.payment, this.transaction)
        this.navCtrl.setRoot(page)
      })
    }
    else{
      this.authProvider.presentToast('Pin incorrecto, por favor verifica el SMS más reciente en tu dispositivo.')
      console.log("codigo incorrecto")
    }
  }

}

