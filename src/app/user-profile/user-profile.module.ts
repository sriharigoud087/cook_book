import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { UserComponent } from './user/user.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    UserProfileComponent,
    UserComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule
  ]
})
export class UserProfileModule { }
