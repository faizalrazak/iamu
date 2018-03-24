import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

	profile:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.profile = 'personal'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  list(){
  	this.navCtrl.setRoot(MainPage);
  	
  }

}
