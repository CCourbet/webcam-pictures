import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card'; 
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog'; 

import {MatToolbarModule} from '@angular/material/toolbar';
import { WebcamDialogComponent } from './components/webcam-dialog/webcam-dialog.component'; 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GalleryComponent,
    WebcamDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    AppRoutingModule,
    MatGridListModule
  ],
  providers: [AuthenticationService],
  entryComponents: [GalleryComponent, WebcamDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
