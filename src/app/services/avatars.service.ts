import { Injectable } from '@angular/core';
import { Avatar } from '../shared/avatar';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class AvatarsService {
  avatars:FirebaseListObservable<any[]>;

  constructor(private af:AngularFire) {
    this.avatars = this.af.database.list("/avatars");
   }

  getAvatars():FirebaseListObservable<any[]>{
    return this.avatars;
  }

  addAvatar(avatar:Avatar){
    this.avatars.push(avatar);
  }

}
