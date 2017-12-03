import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth'
import { ToastController} from 'ionic-angular'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email=''
  password=''
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private authProvider: AuthProvider ,
    private toastCtrl: ToastController        
    
  ) {
  }
  login(){
    if(this.email!='' && this.password!=''){
      this.authProvider.emailLogin(this.email,this.password)      
    }
    else{
      if(this.email===''&& this.password===''){
        this.presentToast('Por favor ingresa tu email y contraseña')
      }
      else{
        if(this.email===''){
          this.presentToast('Por favor ingresa un email valido')
        }
        if(this.password===''){
          this.presentToast('Por favor ingresa tu password')
        }
      }
    }
    }
  goTo(page:string){
    this.navCtrl.push(page)    
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
