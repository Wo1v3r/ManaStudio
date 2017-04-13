//Modules:
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module'
//For FireBase:
import { AngularFireModule } from 'angularfire2';

//Relevant to Flex
import { FlexLayoutModule } from '@angular/flex-layout';


//Relevant to material:
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import 'hammerjs';

//Components:
import { AppComponent } from './app.component';
import { ManaHeaderComponent } from './layout/mana-header/mana-header.component';
import { ManaNavComponent } from './layout/mana-nav/mana-nav.component';
import { ManaFooterComponent } from './layout/mana-footer/mana-footer.component';
import { ManaAboutComponent } from './views/mana-about/mana-about.component';
import { ManaGalleryComponent } from './views/mana-gallery/mana-gallery.component';
import { ManaCreateComponent } from './views/mana-create/mana-create.component';


///TEST DIALOG DEMO
import { MdDialogModule } from '@angular/material'
import {ShopDialog, Shop } from './views/mana-create/shop/shop';

//Services

import { SkillsService } from './services/skills.service';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { AvatarsService } from './services/avatars.service';

//Relevant to FireBase:
import {KEY} from "./keys";

export const fireBaseConfig = {
  apiKey: KEY,
  authDomain: "hero-creator.firebaseapp.com",
  databaseURL: "https://hero-creator.firebaseio.com",
  projectId: "hero-creator",
  storageBucket: "hero-creator.appspot.com",
  messagingSenderId: "73375700738"
};

@NgModule({
  declarations: [
    AppComponent,
    ManaHeaderComponent,
    ManaNavComponent,
    ManaFooterComponent,
    ManaAboutComponent,
    ManaGalleryComponent,
    ManaCreateComponent,
    //For dialog
    Shop,
    ShopDialog,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    //For Firebase
    AngularFireModule.initializeApp(fireBaseConfig)
  ],
  providers: [ SkillsService,
               AvatarsService ],
  bootstrap: [ AppComponent ],
  entryComponents: [
     ShopDialog
    ] 
})
export class AppModule { }
