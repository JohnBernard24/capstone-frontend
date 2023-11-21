import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { RequestsComponent } from './components/requests/requests.component';
import { FriendsComponent } from './components/friends/friends.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';
import { AlbumComponent } from './components/album/album.component';
import { PhotoalbumComponent } from './pages/photoalbum/photoalbum.component';
import { NotificationsComponent } from './components/notifications/notifications.component';


const appRoutes: Routes = [
  {path: '', component:LandingComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'forgot', component:ForgotComponent},
  {path: 'home', component:HomeComponent},
  {path: 'profile', component:ProfileComponent}

 
  
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    ForgotComponent,
    HomeComponent,
    ProfileComponent,
    FooterComponent,
    RequestsComponent,
    FriendsComponent,
    TimelineComponent,
    NewsfeedComponent,
    AlbumComponent,
    PhotoalbumComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
