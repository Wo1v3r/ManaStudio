import { Injectable } from '@angular/core';
import { Skill } from '../shared/skill';
import { SKILLS} from '../shared/mock-skills';

@Injectable()
export class SkillsService {

  constructor() { }

  getSkills():Promise<Skill[]>{
    //TODO : This is temp for the MOCK data
    return Promise.resolve(SKILLS);
  }
}
