import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire'
import { AngularFireStorageModule } from '@angular/fire/storage'
import { AngularFireDatabaseModule } from '@angular/fire/database'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageContainerComponent } from './image-container/image-container.component';
import { environment} from '../environments/environment';
import { ImageModalComponent } from './image-modal/image-modal.component'
// import { environment} from '../environments/environment.prod'
@NgModule({
  declarations: [
    AppComponent,
    ImageContainerComponent,
    ImageModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
