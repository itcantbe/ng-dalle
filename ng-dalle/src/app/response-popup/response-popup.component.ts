import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  responses: string;
}
@Component({
  selector: 'app-response-popup',
  templateUrl: './response-popup.component.html',
  styleUrls: ['./response-popup.component.css']
})
export class ResponsePopupComponent implements OnInit {
  responses =[];
  constructor(
    public dialogRef: MatDialogRef<ResponsePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit() {
    this.dialogRef.updateSize('80%', '80%');
    for (let i of this.data.responses){
      this.responses.push(i)
    }
    console.log(this.data)
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
