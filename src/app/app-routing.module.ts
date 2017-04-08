import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ManaAboutComponent } from './views/mana-about/mana-about.component';
import { ManaBlogComponent } from './views/mana-blog/mana-blog.component';
import { ManaCreateComponent} from './views/mana-create/mana-create.component';
import { ManaGalleryComponent} from './views/mana-gallery/mana-gallery.component';
import { ManaLoginComponent} from './views/mana-login/mana-login.component';
import { ManaRegisterComponent} from './views/mana-register/mana-register.component';


const appRoutes: Routes = [
  {path: 'about' , component: ManaAboutComponent},
  {path: 'blog' , component: ManaBlogComponent},
  {path: 'create' , component: ManaCreateComponent},
  {path: 'gallery' , component: ManaGalleryComponent},
  {path: 'login' , component: ManaLoginComponent},
  {path: 'register' , component: ManaRegisterComponent},

  //Need to change url on address bar accordingly
  {path: '', component: ManaCreateComponent},//TODO Fix this
  {path: '**', component: ManaCreateComponent} //TODO Fix this
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
