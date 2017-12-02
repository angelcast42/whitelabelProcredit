import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterMailPage } from '../register-mail/register-mail';

/**
 * Generated class for the RegisterNamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-name',
  templateUrl: 'register-name.html',
})
export class RegisterNamePage {
  user: any = {}
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }
  goTo(page: string){
    this.navCtrl.push(page,{user:this.user})
  }
}
