import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PastMeetingsPageRoutingModule } from './past-meetings-routing.module';

import { PastMeetingsPage } from './past-meetings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PastMeetingsPageRoutingModule
  ],
  declarations: [PastMeetingsPage]
})
export class PastMeetingsPageModule {}
