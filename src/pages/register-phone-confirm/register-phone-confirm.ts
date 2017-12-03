import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController} from 'ionic-angular'

@IonicPage()
@Component({
  selector: 'page-register-phone-confirm',
  templateUrl: 'register-phone-confirm.html',
})
export class RegisterPhoneConfirmPage {
  amount: number = 0;
  inputAmount: string = '0'
  user: any = {}
  
  constructor(public navCtrl: NavController,
    private toastCtrl: ToastController,        
    public navParams: NavParams) {
    this.user=navParams.data.user
    console.log(this.user)    
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
    if(this.user.code===this.inputAmount){
      this.navCtrl.push(page,{user:this.user})      
    }
    else{
      this.presentToast('El codigo es incorrecto, por favor verifica.')
    }
  }
  presentToast(message:string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
    });
  
    toast.present();
  }
}
