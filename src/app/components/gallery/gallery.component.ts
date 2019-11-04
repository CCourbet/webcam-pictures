import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WebcamDialogComponent } from '../webcam-dialog/webcam-dialog.component';

export class Picture {
  name: string;
  url: string;
}


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public url = "../../assets/pictures/";
  private picturesName = [
    "basilique",
    "rhacophorus-nigropalmatus",
    "trimeresurus-venustus"
  ];
  public pictures: Array<Picture> = [];

  constructor(private dialog: MatDialog) {
    this.picturesName.forEach(picture => {
      this.pictures.push({"name": picture, "url": this.url + picture + ".jpg"});      
    });
  }

  ngOnInit() {
  }

  public openWebcamDialog(): void {
    this.dialog.open(WebcamDialogComponent, {
      width: '30%',
      restoreFocus: false
    });
  }

}
