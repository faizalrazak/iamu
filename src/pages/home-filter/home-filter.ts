import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the HomeFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-filter',
  templateUrl: 'home-filter.html',
})
export class HomeFilterPage {

	structure1: any = { lower: 250000, upper: 1500000 };
	structure2: any = { lower: 30000, upper: 500000 };
	sector = '';
	dataInfo = []
  program = '';


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public dataProvider: DataProvider) {
  
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad HomeFilterPage');
    this.dataInfo = this.dataProvider.getAllAgencies()
  }

  getData(){

  	let data = {
  		sector: this.sector,
  		program: this.program,
  		fund: this.structure1,
  		rent: this.structure2
  	}

  	this.viewCtrl.dismiss(data);
  }

}
