import { Component } from '@angular/core'
import { Platform, LoadingController , App } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { AuthProvider } from '../providers/auth/auth'
import * as firebase from 'firebase/app'

//import { AuthProvider } from '../providers/auth/auth'

@Component({
  templateUrl: 'app.html'
})
export class WhitelabelApp {
  rootPage:any

  constructor(
    private platform: Platform, 
    private statusBar: StatusBar, 
    private splashScreen: SplashScreen,
    private authProvider: AuthProvider,
    public app: App,     
    public loadingCtrl: LoadingController//,
    //private authProvider: AuthProvider
  ) {
    this.authProvider.auth().subscribe(auth=>{
      if(auth){
        console.log("login")
        this.rootPage='DashboardPage'
      }
      else{
        console.log("no login")
        this.rootPage='LoginPage'
      }
    })      
    this.initializeApp()
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault()
      this.splashScreen.hide()
    })
    //this.rootPage = (this.authProvider.authenticated) ? 'DashboardPage' : 'LoginPage'
  }  
}

