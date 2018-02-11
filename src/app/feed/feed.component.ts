import { Component, OnInit, InjectionToken, Inject, OnDestroy } from '@angular/core';
import { TimeService } from '../services/time.service';
import 'rxjs/add/operator/map';

export const ComponentProvided = new InjectionToken<TimeService>('Time service provided on component level');

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  providers: [
    { provide: ComponentProvided, useClass: TimeService }
  ]
})
export class FeedComponent {

  millis$: any;
  constructor(@Inject(ComponentProvided) timeService: TimeService) {
    this.millis$ = timeService.time$().map(t => t.getMilliseconds());
  }
}
