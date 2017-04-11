import { Component } from '@angular/core';

@Component({
  //Edited selector to body instead of app-root to force global styles from styles.css (flex)
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
