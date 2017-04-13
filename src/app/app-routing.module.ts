import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ManaAboutComponent } from './views/mana-about/mana-about.component';
import { ManaCreateComponent} from './views/mana-create/mana-create.component';
import { ManaGalleryComponent} from './views/mana-gallery/mana-gallery.component';
import { NotFoundComponent } from './views/not-found/not-found.component'


const appRoutes: Routes = [
  {path: 'About' , component: ManaAboutComponent},
  {path: 'Create' , component: ManaCreateComponent},
  {path: 'Gallery' , component: ManaGalleryComponent},


  //Need to change url on address bar accordingly
  {path: '', redirectTo: '/Create', pathMatch:"full"},//TODO Fix this
  {path: '**', component: NotFoundComponent} //TODO Fix this
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
