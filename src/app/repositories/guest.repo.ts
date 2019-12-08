import {Injectable} from '@angular/core';
import {BaseRepository} from '@freshfox/ng-firestore';
import {Guest} from '../models';

@Injectable()
export class GuestRepository extends BaseRepository<Guest> {

  getCollectionPath(...documentIds: string[]): string {
    return `events/${documentIds[0]}/guests`;
  }

}
