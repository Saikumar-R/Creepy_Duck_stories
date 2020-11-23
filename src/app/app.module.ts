import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { StoryCardsComponent } from './story-cards/story-cards.component';
import { StoryDataComponent } from './story-data/story-data.component';
import { SocialMediaComponent } from './base/social-media/social-media.component';
import { AboutusComponent } from './base/aboutus/aboutus.component';
import { SupportUsComponent } from './base/support-us/support-us.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    WelcomePageComponent,
    StoryCardsComponent,
    StoryDataComponent,
    SocialMediaComponent,
    AboutusComponent,
    SupportUsComponent,
    RegistrationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
