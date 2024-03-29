import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth'
import { ThirdaccountProvider } from '../../providers/thirdaccount/thirdaccount'
import { Thirdaccount } from '../../models/thirdaccount/thirdaccount'

@IonicPage()
@Component({
  selector: 'page-third-account-pin',
  templateUrl: 'third-account-pin.html',
})
export class ThirdAccountPinPage {
  thirdaccount
  pin
  code
  amount: number = 0;
  inputAmount: string = '0'
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private authProvider: AuthProvider,
    private thirdAccountProvider: ThirdaccountProvider
  ) {
    this.thirdaccount = this.navParams.data.thirdaccount
    this.code=this.navParams.data.code
    console.log('code',this.code )
  }
  append(item: string) {
    if (item == 'backspace') {
      if (this.inputAmount.length < 1){
        this.inputAmount = ''
        this.amount = 0
      } else if (this.inputAmount.indexOf('.') > -1) {
        let backspace = this.inputAmount.split('.')
  
        if (backspace[1] != undefined && backspace[1].length > 1){
          backspace[1] = backspace[1].substr(0,(backspace[1].length-1))
          this.inputAmount = backspace[0]+'.'+backspace[1]
          this.amount = Number(this.inputAmount)
        } else if (backspace[1] != undefined && backspace[1].length == 1) {
          this.inputAmount = backspace[0]+'.';
          this.amount = Number(this.inputAmount)
        } else {
          this.inputAmount = this.inputAmount.substr(0,(this.inputAmount.length-1))
          this.amount = Number(this.inputAmount)
        }
      } else {
        this.inputAmount = this.inputAmount.substr(0,(this.inputAmount.length-1))
        this.amount = Number(this.inputAmount)
      }
  
      if (this.inputAmount == '') {
        this.inputAmount = '0';
      }
    } else {
  
      if (this.inputAmount.indexOf('.') < 0) {
        if (item != '.' && this.inputAmount == '0') {
          this.inputAmount = '';
        }
  
        this.inputAmount += item;
      } else {
        let amount = this.inputAmount.split('.');
        if (amount[1].length < 2 && item != '.'){
          this.inputAmount += item;
        }
      }
  
      this.amount = Number(this.inputAmount);
    }
  }
  create() {
    //verify if pin is true
    if(this.code===this.inputAmount){
      this.thirdAccountProvider.create(this.thirdaccount)
      this.authProvider.presentToast('La cuenta ACH fue creada exitosamente.')
      this.goTo('DashboardPage')
    }
    else{
      this.authProvider.presentToast('PIN incorrecto por favor verifica')
    }

  }
  goTo(page: string){
    this.navCtrl.setRoot(page)
  }
}
