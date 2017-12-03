import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email
  password
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private authProvider: AuthProvider    
  ) {
  }
  login(){
    this.authProvider.emailLogin(this.email,this.password)
    }
  goTo(page:string){
    this.navCtrl.push(page)    
  }
}
