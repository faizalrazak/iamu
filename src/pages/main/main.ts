import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ProgramPage } from '../program/program';
import { ProfilePage } from '../profile/profile';
import { DataProvider }  from '../../providers/data/data';
import { HomeFilterPage } from '../home-filter/home-filter';

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
  agencies = []
  filterAgencies = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider, public modalCtrl: ModalController) {

  	this.pages = [
      { title: 'List', component: LoginPage }
    ];

  }

  ionViewDidLoad() {
    this.agencies = this.dataProvider.getAllAgencies()
    this.filterAgencies = this.agencies
  }

  detail(agency){
    this.navCtrl.setRoot(ProgramPage,{agency: agency});
  }

  profile(){
    this.navCtrl.setRoot(ProfilePage);
  }

  getFilter(){
    let modal = this.modalCtrl.create(HomeFilterPage)
    modal.onDidDismiss(data => {
      console.log(data);
      this.filterAgencies = this.agencies.filter(function(el){
        return el.name == data.sector && el.nama_prog == data.program;
        //el.had_min >= data.fund.lower || el.had_max <= data.fund.upper ||
      })
    });
    modal.present();
  }

}
