import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Modal } from 'ionic-angular';
import { MyApp } from './app.component';

import { MiningPage } from '../pages/mining/mining';
import { WalletPage } from '../pages/wallet/wallet';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { ModalPage } from '../pages/modal/modal';

// -------- 
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MiningPage,
    WalletPage,
    HomePage,
    ProfilePage, 
    LoginPage, 
    ModalPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MiningPage,
    WalletPage,
    HomePage,
    ProfilePage, 
    LoginPage, 
    ModalPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
