import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cashout-pin',
  templateUrl: 'cashout-pin.html',
})
export class CashoutPinPage {
  pin: string = ''
  inputPin: string = ''
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }
  append(item: string) {
    if (item == 'backspace') {
      if (this.inputPin.length < 1){
        this.inputPin = ''
        this.pin = ''
      } else if (this.inputPin.indexOf('.') > -1) {
        let backspace = this.inputPin.split('.')
  
        if (backspace[1] != undefined && backspace[1].length > 1){
          backspace[1] = backspace[1].substr(0,(backspace[1].length-1))
          this.inputPin = backspace[0]+'.'+backspace[1]
          this.pin = this.inputPin
        } else if (backspace[1] != undefined && backspace[1].length == 1) {
          this.inputPin = backspace[0]+'.';
          this.pin = this.inputPin
        } else {
          this.inputPin = this.inputPin.substr(0,(this.inputPin.length-1))
          this.pin = this.inputPin
        }
      } else {
        this.inputPin = this.inputPin.substr(0,(this.inputPin.length-1))
        this.pin = this.inputPin
      }
  
      if (this.inputPin == '') {
        this.inputPin = '0';
      }
    } else if (this.pin.length < 5){
  
      if (this.inputPin.indexOf('.') < 0) {
        if (item != '.' && this.inputPin == '0') {
          this.inputPin = '';
        }
  
        this.inputPin += item;
      } else {
        let pin = this.inputPin.split('.');
        if (pin[1].length < 2 && item != '.'){
          this.inputPin += item;
        }
      }
  
      this.pin = this.inputPin;
    
  }    
}
goTo(page: string){
  this.navCtrl.setRoot(page)
}
}
