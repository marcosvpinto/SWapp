import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpeciesServiceProvider } from "../../providers/species-service/species-service";

/**
 * Generated class for the SpeciesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-species',
  templateUrl: 'species.html',
  providers: [SpeciesServiceProvider]
})
export class SpeciesPage {

  private species;

  private loading=true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public speciesService:SpeciesServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpeciesPage');
    this.loadSpecies();
  }

  loadSpecies(){
    this.speciesService.load().subscribe(
      data=>{
        console.log(data);
        this.loading=false;
        this.species=data.results;
      }
    );
  }

}
