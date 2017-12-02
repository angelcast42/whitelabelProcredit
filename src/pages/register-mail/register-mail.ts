import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterMailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-mail',
  templateUrl: 'register-mail.html',
})

export class RegisterMailPage {
  user: any = {}
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.user=navParams.data.user
  }
  goTo(page: string){
    this.navCtrl.setRoot(page,{user:this.user})
  }
}
