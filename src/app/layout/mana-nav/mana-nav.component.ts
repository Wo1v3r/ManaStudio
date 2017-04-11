import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'mana-nav',
  templateUrl: './mana-nav.component.html',
  styleUrls: ['./mana-nav.component.css']
})
export class ManaNavComponent implements OnInit {

  navLinks:string[] = [
    "Create",
    "Gallery",
    "Blog",
    "About",
    "Login",
    "Register"
  ]
  constructor() { }

  ngOnInit() {
  }

}
