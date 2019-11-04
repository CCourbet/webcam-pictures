import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-webcam-dialog',
  templateUrl: './webcam-dialog.component.html',
  styleUrls: ['./webcam-dialog.component.scss']
})
export class WebcamDialogComponent implements OnInit, AfterViewInit {

  @ViewChild("video", { static: false })
  private video: ElementRef;

  @ViewChild("canvas", { static: false })
  private canvas: ElementRef;

  public alert = null;
  public capture = null;
  private date: string;

  constructor(private dialogRef: MatDialogRef<WebcamDialogComponent>) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          this.video.nativeElement.srcObject = stream;
          this.video.nativeElement.play();
        })
        .catch(error => {
          this.alert = error;
        });
    }

  }

  public takePicture() {
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
    this.capture = this.canvas.nativeElement.toDataURL("assets/pictures/png");
    this.date = this.formatDate(new Date());
  }

  public onCancel() {
    this.dialogRef.close();
    if (this.video) {
      this.removeWebcam();
    }
  }

  public addPicture() {
    const result = { "name": this.date, "url": this.capture }
    this.dialogRef.close(result);
    this.removeWebcam();
  }

  private removeWebcam() {
    this.video.nativeElement.pause();
    this.video.nativeElement.src = "";
    this.video.nativeElement.srcObject.getTracks()[0].stop();
  }
  
  private formatDate(date: Date): string {
    const day = this.displayZero(date.getDate());
    const month = this.displayZero(date.getMonth());
    const year = this.displayZero(date.getFullYear());
    const hours = this.displayZero(date.getHours());
    const minutes = this.displayZero(date.getMinutes());
    const seconds = this.displayZero(date.getSeconds());

    return day + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds
  }

  private displayZero(date: number): string {
    let dateToString = date.toString();
    if (dateToString.length === 1) {
      dateToString = '0' + date;
    }
    return dateToString;
  }

}
