import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ProgramPage } from '../program/program';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

	pages: Array<{title: string, component: any}>

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	this.pages = [
      { title: 'List', component: LoginPage }
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  detail(){
    this.navCtrl.setRoot(ProgramPage);
  }

  profile(){
    this.navCtrl.setRoot(ProfilePage);
  }

}
