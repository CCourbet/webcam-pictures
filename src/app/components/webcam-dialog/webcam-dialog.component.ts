import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-webcam-dialog',
  templateUrl: './webcam-dialog.component.html',
  styleUrls: ['./webcam-dialog.component.scss']
})
export class WebcamDialogComponent implements OnInit, AfterViewInit {

  @ViewChild("video", { static: true })
  private video: ElementRef;

  @ViewChild("canvas", { static: true })
  private canvas: ElementRef;

  public alert = null;
  public capture = null;

  constructor(private dialogRef: MatDialogRef<WebcamDialogComponent>) { }

  ngOnInit() {
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

  ngAfterViewInit() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          this.video.nativeElement.src = window.URL.createObjectURL(stream);
          this.video.nativeElement.play();
        })
        .catch(error => {
          console.log("Something went wrong!", error);
          this.alert = error;
        });
    }

  }

  public takePicture() {
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
    this.capture = this.canvas.nativeElement.toDataURL("image/png");
  }

  public onCancel() {
    this.dialogRef.close();
  }

  public addPicture() {
    this.dialogRef.close();
  }

}
