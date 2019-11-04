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
  public pictures: Array<Picture> = [];
  private picturesName = [
    "basilique",
    "rhacophorus-nigropalmatus",
    "trimeresurus-venustus"
  ];

  constructor(private dialog: MatDialog) {
    this.picturesName.forEach(picture => {
      this.pictures.push({"name": picture, "url": this.url + picture + ".jpg"});      
    });
  }

  ngOnInit() {
  }

  public openWebcamDialog(): void {
    let dialog = this.dialog.open(WebcamDialogComponent, {
      width: '50%',
      restoreFocus: false
    });
    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.pictures.push({"name": result.name, "url": result.url});
      }
    })
  }

}
