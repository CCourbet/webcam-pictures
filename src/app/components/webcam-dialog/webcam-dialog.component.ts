import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-webcam-dialog',
  templateUrl: './webcam-dialog.component.html',
  styleUrls: ['./webcam-dialog.component.scss']
})
export class WebcamDialogComponent implements OnInit {

  private video = document.getElementById('video');
  private canvas = document.getElementById('canvas');
  private snap = document.getElementById("snap");
  public alert = null;
  private imageCapture;

  constructor(private dialogRef: MatDialogRef<WebcamDialogComponent>) { }

  ngOnInit() {
    console.log('video');
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          /*window.stream = stream;
          video.srcObject = stream;*/
        })
        .catch(error => {
          console.log("Something went wrong!", error);
          this.alert = error;
        });
    }
  }

  public takePicture() {
    /*var context = this.canvas.getContext('2d');
    context.drawImage(this.video, 0, 0, 640, 480);*/
  }

  public onCancel() {
    this.dialogRef.close();
  }

  public addPicture() {
    console.log("done");
    this.dialogRef.close();
  }

}
