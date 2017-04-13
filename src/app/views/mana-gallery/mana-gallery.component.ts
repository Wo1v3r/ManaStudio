import { Component, OnInit } from '@angular/core';
import { Avatar } from '../../shared/avatar';
import { AvatarsService } from '../../services/avatars.service';
import { AvatarDetailComponent } from './avatar-detail/avatar-detail.component';


@Component({
  selector: 'app-mana-gallery',
  templateUrl: './mana-gallery.component.html',
  styleUrls: ['./mana-gallery.component.css']
})
export class ManaGalleryComponent implements OnInit {
  avatars:Avatar[];

  constructor(private avatarServices:AvatarsService) { }

  ngOnInit() {
    this.getAvatars();
  }

  getAvatars(){
    this.avatarServices.getAvatars()
        .subscribe(
          (avatars)=>this.avatars=avatars,
          (error)=> console.log("Error: ",error)
        );
  }

}
