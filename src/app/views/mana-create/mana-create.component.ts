import { Component, OnInit } from '@angular/core';
import { Avatar } from '../../shared/avatar';
import { Skill } from '../../shared/skill';
import { SkillsService } from '../../services/skills.service'
import { Shop } from './shop/shop';

@Component({
  selector: 'app-mana-create',
  templateUrl: './mana-create.component.html',
  styleUrls: ['./mana-create.component.css']
})
export class ManaCreateComponent implements OnInit {
  avatar: Avatar = {
    name: "",
    id: 1,
    inventory: [],
    type: "",
    skills: [],
    proficencies:[],
    money:1000
  };
  
  skills: Skill[];
  selectedSkill: Skill;
  currentProficiency: number;

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    this.getSkills();
  }

  getSkills(): void {
    this.skillsService.getSkills()
      .then((skills) => this.skills = skills);
  }

  addSkill(): void {
    if (this.selectedSkill && ! this.avatar.skills.find(
                    (other:Skill)=> this.selectedSkill.id == other.id)) {
      this.avatar.skills.push(this.selectedSkill);
      this.avatar.proficencies[this.selectedSkill.id]=this.currentProficiency;
    }

  }

  removeSkill(skill:Skill):void{
    this.avatar.skills = this.avatar.skills.filter((other)=>other!=skill);
  }

}
