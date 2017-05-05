import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeopleService } from "../../providers/people-service";

/**
 * Generated class for the People page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
  providers: [PeopleService]
})
export class People {

  people;

  loading = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public peopleService: PeopleService) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad People');
    this.loadPeople();
  }

  loadPeople(){
    this.peopleService.load()
    .subscribe(data => {
      console.log(data);
      this.people = data.results;
      this.loading = false;
    });
  }

  goToDetailsPeople(person){
    this.navCtrl.push('PeopleDetails', {person: person});
  }

}
