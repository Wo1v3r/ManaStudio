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
  {path: 'About' , component: ManaAboutComponent},
  {path: 'Blog' , component: ManaBlogComponent},
  {path: 'Create' , component: ManaCreateComponent},
  {path: 'Gallery' , component: ManaGalleryComponent},
  {path: 'Login' , component: ManaLoginComponent},
  {path: 'Register' , component: ManaRegisterComponent},

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
