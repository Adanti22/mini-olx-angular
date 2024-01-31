import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PersonalAreaComponent } from './personal-area/personal-area.component';
import { MainComponent } from './main/main.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GoalAnnouncementComponent } from './goal-announcement/goal-announcement.component';
import { GoalUserComponent } from './goal-user/goal-user.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'personal',
    component: PersonalAreaComponent,
  },
  {
    path: 'navigation',
    component: NavigationComponent,
  },
  {
    path: 'announcement/:id',
    component: GoalAnnouncementComponent,
  },
  {
    path: 'user/:id',
    component: GoalUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
