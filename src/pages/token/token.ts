import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth'

@IonicPage()
@Component({
  selector: 'page-token',
  templateUrl: 'token.html',
})
export class TokenPage {
  user: any = {}
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private authProvider: AuthProvider    
    
  ) {
    this.user=navParams.data.user
    
  }
  goTo(page: string){
    this.authProvider.emailSignUp(this.user)
  }
}
