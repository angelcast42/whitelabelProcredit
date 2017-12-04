import { BrowserModule } from '@angular/platform-browser'
import { ErrorHandler, NgModule } from '@angular/core'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'

// Import app, schema and models
import { WhitelabelApp } from './app.component'
import { config } from './app.constants'

// Import angularfire
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth'


// Import Ionic Native Plugins
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'

// Import Providers
import { AuthProvider } from '../providers/auth/auth'
import { UserProvider } from '../providers/user/user'
import { AccountProvider } from '../providers/account/account'

import { HttpModule } from '@angular/http'
import { ThirdaccountProvider } from '../providers/thirdaccount/thirdaccount';
import { TransferProvider } from '../providers/transfer/transfer';
import { CashoutProvider } from '../providers/cashout/cashout';
import { PaymentProvider } from '../providers/payment/payment';
import { ServiceProvider } from '../providers/service/service';

@NgModule({
  declarations: [
    WhitelabelApp
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config.staging),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpModule,    
    IonicModule.forRoot(WhitelabelApp, {
        backButtonText: '',
        backButtonIcon: 'ios-arrow-back'
    })

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    WhitelabelApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    UserProvider,
    AccountProvider,
    ThirdaccountProvider,
    TransferProvider,
    CashoutProvider,
    PaymentProvider,
    ServiceProvider
  ]
})
export class AppModule {}
