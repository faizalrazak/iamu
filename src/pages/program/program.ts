import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main';
import { ProfilePage } from '../profile/profile'

/**
 * Generated class for the ProgramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-program',
  templateUrl: 'program.html',
})
export class ProgramPage {

  agencies = this.navParams.get('agency')

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ProgramPage');
    console.log(this.agencies);
  }

  list(){
  	this.navCtrl.setRoot(MainPage)
  }

  profile(){
  	this.navCtrl.setRoot(ProfilePage)
  }
}
