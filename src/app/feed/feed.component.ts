import { Component, OnInit, InjectionToken, Inject, OnDestroy } from '@angular/core';
import { TimeService } from '../services/time.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  providers: [
    TimeService
  ]
})
export class FeedComponent {

  millis$: any;
  constructor(timeService: TimeService) {
    this.millis$ = timeService.time$().map(t => t.getMilliseconds());
  }

}
