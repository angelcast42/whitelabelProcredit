import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-transfer-add',
  templateUrl: 'transfer-add.html',
})
export class TransferAddPage {
  amount: number = 0;
  inputAmount: string = '0'
  accountFrom
  accountTo
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    if (this.navParams.data.accountFrom) {
      this.accountFrom = this.navParams.data.accountFrom
      console.log('account from: ', this.accountFrom)
    } else {
      this.accountFrom = null
    }
    if (this.navParams.data.accountTo) {
      this.accountTo = this.navParams.data.accountTo
    } else {
      this.accountTo = null
    }
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
  goTo(page: string){
    this.navCtrl.push(page)
  }
}

