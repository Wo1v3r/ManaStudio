import { Component, OnInit, Input} from '@angular/core';
import { Avatar } from '../../../shared/avatar';

@Component({
  selector: 'avatar-detail',
  templateUrl: './avatar-detail.component.html',
  styleUrls: ['./avatar-detail.component.css']
})
export class AvatarDetailComponent implements OnInit {

  @Input()avatar:Avatar;
  constructor() { }

  ngOnInit() {
  }

}
