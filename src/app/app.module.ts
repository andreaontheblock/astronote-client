import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';

import { RequireAnonGuard } from './guards/require-anon.guard';
import { RequireUserGuard } from './guards/require-user.guard';
import { InitAuthGuard } from './guards/init-auth.guard';

import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { CreateNotePageComponent } from './pages/create-note-page/create-note-page.component';
import { NoteDetailPageComponent } from './pages/note-detail-page/note-detail-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'welcome', component:  WelcomePageComponent,  canActivate: [ InitAuthGuard ]},
  { path: 'signup', component: SignupPageComponent,  canActivate: [ RequireAnonGuard ]},
  { path: 'login', component: LoginPageComponent,  canActivate: [ RequireAnonGuard ]},
  { path: 'user', component: UserPageComponent,  canActivate: [ RequireUserGuard ]},
  { path: 'user/:id', component:  ProfilePageComponent,  canActivate: [ RequireUserGuard ]},
  { path: 'create', component:  CreateNotePageComponent,  canActivate: [ RequireUserGuard ]},
  { path: 'note/:id', component:  NoteDetailPageComponent,  canActivate: [ RequireUserGuard ]},

  // 404 PAGE MUST BE THE LAST ONE
  {path: '**', component: NotFoundPageComponent, canActivate: [ InitAuthGuard ]}

 ];

@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    LoginPageComponent,
    ProfilePageComponent,
    NotFoundPageComponent,
    UserPageComponent,
    CreateNotePageComponent,
    NoteDetailPageComponent,
    WelcomePageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, RequireAnonGuard, RequireUserGuard, InitAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
