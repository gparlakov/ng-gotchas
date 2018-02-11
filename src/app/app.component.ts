import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showTime = true;
  showFeed = false;

  public toggleTimer() {
    this.showTime = !this.showTime;
  }

  public toggleFeed() {
    this.showFeed = !this.showFeed;
  }
}
