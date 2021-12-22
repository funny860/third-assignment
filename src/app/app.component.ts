import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .greater {
        color: white;
      }
    `,
  ],
})
export class AppComponent {
  title = 'third-assignment';
  dd = false;
  buttonLog: number[] = [];

  displayDetails() {
    this.dd = this.dd == true ? false : true;
    this.buttonLog.push(Date.now());
  }
}
