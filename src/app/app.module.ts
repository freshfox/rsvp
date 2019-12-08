import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FFFirestoreModule, FIRESTORE_STORAGE_CONFIG} from '@freshfox/ng-firestore';
import {FFInputModule} from '@freshfox/ng-core';
import {EventRepository} from './repositories/event.repo';
import {GuestRepository} from './repositories/guest.repo';
import {EventComponent} from './event.component';
import {TranslateModule} from '@ngx-translate/core';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import * as firebase from 'firebase/app';

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FFFirestoreModule,
    FFInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    TranslateModule.forRoot(),
  ],
  providers: [
    EventRepository,
    GuestRepository,
    { provide: FIRESTORE_STORAGE_CONFIG, useValue: { persistenceEnabled: false, firebase: environment.firebase } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
