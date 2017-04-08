import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ManaHeaderComponent } from './layout/mana-header/mana-header.component';
import { ManaNavComponent } from './layout/mana-nav/mana-nav.component';
import { ManaFooterComponent } from './layout/mana-footer/mana-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ManaHeaderComponent,
    ManaNavComponent,
    ManaFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
