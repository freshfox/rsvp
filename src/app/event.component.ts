import {ChangeDetectionStrategy, Component, HostBinding, OnInit} from '@angular/core';
import {EventRepository} from './repositories/event.repo';
import {GuestRepository} from './repositories/guest.repo';
import {Event, Guest} from './models';
import {Observable, of} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-event',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
      <div *ngIf="event$ | async as event">
          {{ event.name }}
          {{ event.description }}
      </div>
  `
})

export class EventComponent implements OnInit {

  @HostBinding('class') clazz = 'app-event';

  event$: Observable<Event>;
  guests$: Observable<Guest[]>;

  constructor(private eventRepo: EventRepository,
              private guestRepo: GuestRepository,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.event$ = this.route.params
      .pipe(switchMap(params => {
        if (params.eventId) {
          return this.eventRepo.findById(params.eventId);
        }

        return of(null);
      }));
  }
}
