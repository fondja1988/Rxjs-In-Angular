import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Learning RXJS in Angular`;
  constructor() {
    console.log('je suis dans la console de stackblitz')
  }
}
