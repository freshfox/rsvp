import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

export interface Event {
  id?: string;
  name?: string;
  slug?: string;
  startTime?: Timestamp;
  endTime?: Timestamp;
  description?: string;
  titleImageUrl?: string;
}

export interface Guest {
  id?: string;
  firstName?: string;
  lastName?: string;
  status?: ParticipationStatus;
}

export enum ParticipationStatus {
  Going = 'going',
  Maybe = 'maybe',
  NotGoing = 'not_going',
}
