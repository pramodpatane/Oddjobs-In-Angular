import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PostJobsComponent } from './components/post-jobs/post-jobs.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { HowWorksComponent } from './components/how-works/how-works.component';
import { BrowsJobsComponent } from './components/brows-jobs/brows-jobs.component';
import { HeaderComponent } from './shared/header/header.component';
import { ForgotPassComponent } from './components/log-in/forgot-pass/forgot-pass.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { FindProvidersComponent } from './components/find-providers/find-providers.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PostJobsComponent,
    SignUpComponent,
    LogInComponent,
    HowWorksComponent,
    BrowsJobsComponent,
    HeaderComponent,
    ForgotPassComponent,
    HomeComponent,
    PageNotFoundComponent,
    FindProvidersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
