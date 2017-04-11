import { Component, OnInit } from '@angular/core';
import { Avatar } from '../../shared/avatar';


@Component({
  selector: 'app-mana-create',
  templateUrl: './mana-create.component.html',
  styleUrls: ['./mana-create.component.css']
})
export class ManaCreateComponent implements OnInit {
  avatar:Avatar = {
    name: "",
    id: 1,
    inventory: null,
    type:"",
    skills:[]
  };

  constructor() { }

  ngOnInit() {
  }

}
