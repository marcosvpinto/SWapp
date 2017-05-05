import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PeopleDetails } from './people-details';

@NgModule({
  declarations: [
    PeopleDetails,
  ],
  imports: [
    IonicPageModule.forChild(PeopleDetails),
  ],
  exports: [
    PeopleDetails
  ]
})
export class PeopleDetailsModule {}
