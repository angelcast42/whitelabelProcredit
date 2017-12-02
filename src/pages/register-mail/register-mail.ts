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
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }
  goTo(page: string){
    this.navCtrl.setRoot(page)
  }
}
