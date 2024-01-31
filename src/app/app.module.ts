import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainComponent } from './main/main.component';
import { PersonalAreaComponent } from './personal-area/personal-area.component';
import { GoalAnnouncementComponent } from './goal-announcement/goal-announcement.component';
import { FormsModule } from '@angular/forms';
import { GoalUserComponent } from './goal-user/goal-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NavigationComponent,
    MainComponent,
    PersonalAreaComponent,
    GoalAnnouncementComponent,
    GoalUserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
