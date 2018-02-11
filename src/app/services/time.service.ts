import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

let instances = 0;

@Injectable()
export class TimeService implements OnDestroy {

  time$(): Observable<Date> {
    return Observable
      .timer(0, 1000)
      .map(_ => {
        return new Date();
      });
  }

  ngOnDestroy(): void {
    instances -= 1;
    console.log('Time service destroyed, instances: ', instances);
  }
  constructor() {
    instances += 1;
    console.log('Contructed time service, instances: ', instances);
  }
}
