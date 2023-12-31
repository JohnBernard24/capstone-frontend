import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from '@pages/settings/settings.component';
import { FooterComponent } from './components/footer/footer.component';
import { RequestsComponent } from './components/requests/requests.component';
import { FriendsComponent } from './components/friends/friends.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';
import { AlbumComponent } from './components/album/album.component';
import { PhotoalbumComponent } from './pages/photoalbum/photoalbum.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ChangePassComponent } from '@components/change-pass/change-pass.component';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';
import { ChangepasswordComponent } from './pages/changepassword/changepassword.component';
import { AllAlbumComponent } from './components/all-album/all-album.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { PostComponent } from './components/post/post.component';
import { NewAlbumModalComponent } from './modals/new-album-modal/new-album-modal.component';
import { AlbumPhotosViewComponent } from './pages/album-photos-view/album-photos-view.component';
import { AlbumPhotosComponent } from './components/album-photos/album-photos.component';
import { EditAboutmeComponent } from './modals/edit-aboutme/edit-aboutme.component';
import { ImageModalComponent } from './modals/image-modal/image-modal.component';
import { RequestsModalComponent } from './modals/requests-modal/requests-modal.component';
import { SearchUserListComponent } from './pages/search-user-list/search-user-list.component';
import { IndivPostComponent } from './pages/indiv-post/indiv-post.component';


const appRoutes: Routes = [
  {path: '', component:LandingComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'home', component:HomeComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'settings', component:SettingsComponent},
  {path: 'forgot-password', component:ForgotComponent},
  {path: 'change-password', component:ChangepasswordComponent},
  {path: 'album', component:PhotoalbumComponent},
  {path: 'photos', component:AlbumPhotosViewComponent},
  {path: 'search-user-list', component:SearchUserListComponent},
  {path: 'indiv-post', component:IndivPostComponent}

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
    NotificationsComponent,
    SettingsComponent,
    ChangePassComponent,
    ForgotPassComponent,
    ChangepasswordComponent,
    AllAlbumComponent,
    AccordionComponent,
    PostComponent,
    NewAlbumModalComponent,
    AlbumPhotosViewComponent,
    AlbumPhotosComponent,
    EditAboutmeComponent,
    ImageModalComponent,
    RequestsModalComponent,
    SearchUserListComponent,
    IndivPostComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    NgToastModule, 
    RouterModule.forRoot(appRoutes), 
    MatButtonModule, 
    MatDialogModule, 
    MatTooltipModule, 
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
