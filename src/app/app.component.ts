import { Component } from '@angular/core'
import { Platform, LoadingController } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'

//import { AuthProvider } from '../providers/auth/auth'

@Component({
  templateUrl: 'app.html'
})
export class WhitelabelApp {
  rootPage: any = 'LoginPage'

  constructor(
    private platform: Platform, 
    private statusBar: StatusBar, 
    private splashScreen: SplashScreen,
    public loadingCtrl: LoadingController//,
    //private authProvider: AuthProvider
  ) {
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

