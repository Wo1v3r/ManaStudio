import { Injectable } from '@angular/core';
import { Skill } from '../shared/skill';
import { SKILLS} from '../shared/mock-skills';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class SkillsService {
  skills:FirebaseListObservable<any[]>;
  constructor(af:AngularFire) {
    this.skills = af.database.list("/skills");
   }

  getSkills():FirebaseListObservable<any[]>{
    //TODO : This is temp for the MOCK data
    // return Promise.resolve(SKILLS);
    return this.skills;
  }
}
