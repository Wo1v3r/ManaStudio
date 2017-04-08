import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module'


import { AppComponent } from './app.component';
import { ManaHeaderComponent } from './layout/mana-header/mana-header.component';
import { ManaNavComponent } from './layout/mana-nav/mana-nav.component';
import { ManaFooterComponent } from './layout/mana-footer/mana-footer.component';
import { ManaAboutComponent } from './views/mana-about/mana-about.component';
import { ManaBlogComponent } from './views/mana-blog/mana-blog.component';
import { ManaGalleryComponent } from './views/mana-gallery/mana-gallery.component';
import { ManaCreateComponent } from './views/mana-create/mana-create.component';
import { ManaLoginComponent } from './views/mana-login/mana-login.component';
import { ManaRegisterComponent } from './views/mana-register/mana-register.component';

@NgModule({
  declarations: [
    AppComponent,
    ManaHeaderComponent,
    ManaNavComponent,
    ManaFooterComponent,
    ManaAboutComponent,
    ManaBlogComponent,
    ManaGalleryComponent,
    ManaCreateComponent,
    ManaLoginComponent,
    ManaRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
