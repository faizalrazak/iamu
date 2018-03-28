import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http'; 
import { HttpClientModule } from '@angular/common/http'; 

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { MainPage } from '../pages/main/main';
import { ProgramPage } from '../pages/program/program';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { ProfilePage } from '../pages/profile/profile';
import { HomeFilterPage } from '../pages/home-filter/home-filter';
import { DataProvider } from '../providers/data/data'; 


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignUpPage,
    MainPage,
    ProgramPage,
    ForgotPasswordPage,
    ProfilePage,
    HomeFilterPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignUpPage,
    MainPage,
    ProgramPage,
    ProfilePage,
    ForgotPasswordPage,
    HomeFilterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
