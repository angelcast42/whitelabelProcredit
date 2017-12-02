import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-token',
  templateUrl: 'token.html',
})
export class TokenPage {
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }
  goTo(page: string){
    this.navCtrl.setRoot(page)
  }
}
