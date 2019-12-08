import {Injectable} from '@angular/core';
import {BaseRepository} from '@freshfox/ng-firestore';

@Injectable()
export class EventRepository extends BaseRepository<Event> {

  getCollectionPath(...documentIds: string[]): string {
    return 'events';
  }

}
