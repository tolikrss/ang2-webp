import { Component } from '@angular/core';

import '../assets/styles/normalize.css';
import '../assets/styles/styles.css';
import '../assets/styles/myStyles.scss';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  films: string[] = ['first', 'second'];
}
