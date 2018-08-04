import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';

import { RequireAnonGuard } from './guards/require-anon.guard';
import { RequireUserGuard } from './guards/require-user.guard';

import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full'},
  { path: 'signup', component: SignupPageComponent,  canActivate: [ RequireAnonGuard ]},
  { path: 'login', component: LoginPageComponent,  canActivate: [ RequireAnonGuard ]},
  { path: 'user', component: UserPageComponent,  canActivate: [ RequireUserGuard ]},
  { path: 'user/:id', component:  ProfilePageComponent,  canActivate: [ RequireUserGuard ]},

  // 404 PAGE MUST BE THE LAST ONE
  {path: '**', component: NotFoundPageComponent}

 ];

@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    LoginPageComponent,
    ProfilePageComponent,
    NotFoundPageComponent,
    UserPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, RequireAnonGuard, RequireUserGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
