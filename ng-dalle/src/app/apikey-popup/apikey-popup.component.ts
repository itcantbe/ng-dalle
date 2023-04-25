import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-apikey-popup',
  templateUrl: './apikey-popup.component.html',
  styleUrls: ['./apikey-popup.component.css']
})
export class ApikeyPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ApikeyPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
