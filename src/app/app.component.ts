import { Component } from '@angular/core';

import '../assets/styles/normalize.css';
import '../assets/styles/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  films: string[] = ['first', 'second'];
}
