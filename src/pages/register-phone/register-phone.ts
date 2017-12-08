import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController} from 'ionic-angular'
import { UserProvider } from '../../providers/user/user';
import { SimProvider } from '../../providers/sim/sim'

/**
 * Generated class for the RegisterPhonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-phone',
  templateUrl: 'register-phone.html',
})
export class RegisterPhonePage {
  amount: number = 0;
  inputAmount: string = '0'
  user: any = {}
  
  constructor(public navCtrl: NavController,
    private toastCtrl: ToastController,    
  public userProvider: UserProvider,  
  public navParams: NavParams,
  private simProvider: SimProvider
) {
    this.user=navParams.data.user
    
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
    console.log(this.inputAmount)
    if(this.inputAmount.length<8){
      this.presentToast('por favor ingresa un numero valido')
    }
    else{
      this.simProvider.getSim().then(info=>{
        if(info.countryCode==='gt'){
          this.user.phone=this.inputAmount
          this.user.code=this.userProvider.sendMessage('+502',this.user.phone)
          this.navCtrl.push('RegisterPhoneConfirmPage',{user:this.user})
        }
        else{
          this.user.phone=this.inputAmount
          this.user.code=this.userProvider.sendMessage('+505',this.user.phone)
          this.navCtrl.push('RegisterPhoneConfirmPage',{user:this.user})
        }
      })

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
