import { Component, OnInit } from '@angular/core';
import { TimeService } from '../services/time.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-time-widget',
  templateUrl: './time-widget.component.html',
  styleUrls: ['./time-widget.component.css']
})
export class TimeWidgetComponent {

  public readonly time$: Observable<string>;

  constructor(timeService: TimeService) {
    this.time$ = timeService.time$().map(t => `${t.getHours()} ${t.getMinutes()} ${t.getSeconds()}`);
  }
}
