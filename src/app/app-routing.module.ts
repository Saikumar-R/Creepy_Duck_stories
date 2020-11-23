import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { BaseComponent } from './base/base.component';
import { StoryCardsComponent } from './story-cards/story-cards.component';
import { AboutusComponent } from './base/aboutus/aboutus.component';
import { SocialMediaComponent } from './base/social-media/social-media.component';
import { SupportUsComponent } from './base/support-us/support-us.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';


const routes: Routes = [
  {
    path:'', redirectTo:'/welcome-page', pathMatch:'full'
  },
  {
    path:'welcome-page', component: WelcomePageComponent
  },
  {
    path:'base', component: BaseComponent,
    children:[
      {
        path:'cards', component:StoryCardsComponent
      },{
        path:'aboutUs', component: AboutusComponent
      },{
        path:'socialMedia', component: SocialMediaComponent
      },{
        path:'supportUs', component: SupportUsComponent
      }
    ]
  },
  {
    path:'authentication', component:RegistrationPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
