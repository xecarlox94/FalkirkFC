import { NgModule } from "@angular/core";
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';



@NgModule({
  declarations: [
      ProfileViewComponent,
      ProfileEditComponent
    ]
})



export class ProfileModule { }