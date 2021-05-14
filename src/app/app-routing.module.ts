import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowsJobsComponent } from './components/brows-jobs/brows-jobs.component';
import { HowWorksComponent } from './components/how-works/how-works.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { PostJobsComponent } from './components/post-jobs/post-jobs.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { ForgotPassComponent } from './components/log-in/forgot-pass/forgot-pass.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { FindProvidersComponent } from './components/find-providers/find-providers.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'forgot-pass',
    component: ForgotPassComponent
  },
  {
    path: 'post-job',
    component: PostJobsComponent 
  },
  {
    path: 'search',
    component: FindProvidersComponent 
  },
  {
    path: 'browse-jobs',
    component: BrowsJobsComponent 
  },
  {
    path: 'how-it-works',
    component: HowWorksComponent 
  },
  {
    path: 'logIn',
    component: LogInComponent 
  },
  {
    path: 'signUp',
    component: SignUpComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
