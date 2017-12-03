import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController} from 'ionic-angular'

@IonicPage()
@Component({
  selector: 'page-register-block-password',
  templateUrl: 'register-block-password.html',
})
export class RegisterBlockPasswordPage {
  user: any = {}
  
  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,    
    public navParams: NavParams
  ){
    this.user=navParams.data.user
  }

  goTo(page: string) {
    if(this.user.password>5){
      if(this.user.password===this.user.repassword){
        this.navCtrl.push(page,{user:this.user})      
      } 
      else{
        this.presentToast('Las contraseñas no coinciden por favor verifique.')
      }
    }
    else{
      this.presentToast('La contraseña debe contener al menos 6 caracteres')
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
