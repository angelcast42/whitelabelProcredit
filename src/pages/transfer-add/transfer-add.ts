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
  transfer: any = {
    accountFrom: null,
    accountTo: null
  }
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    if (this.navParams.data.accountFrom) {
      this.transfer.accountFrom = this.navParams.data.accountFrom
    }
    if (this.navParams.data.accountTo) {
      this.transfer.accountTo = this.navParams.data.accountTo
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
  goTo(page: string, params){
    if (!params) {
      this.transfer.amount= +this.inputAmount
      this.navCtrl.push(page,{transfer:this.transfer})
    } else {
      this.navCtrl.push(page, params)
    }
  }
  transferFrom(transfer) {
    this.goTo('TransferFromPage', {transfer: transfer})
  }
  transferTo(transfer) {
    this.goTo('TransferToPage', {transfer: transfer})
  }  
}

