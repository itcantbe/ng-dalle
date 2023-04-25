import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ApikeyPopupComponent } from '../apikey-popup/apikey-popup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  key: string;
  prompt: string = '';
  model: string = 'image-alpha-001';
  size: string = '256x256';
  numImages: number = 1;
  responses: string[] = [];
  numberofimage = [1,2,3,4,5,6,7,8,9,10]
  constructor(public dialog: MatDialog, private http: HttpClient) { }

  ngOnInit() {
    this.openDialog();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ApikeyPopupComponent, {
      data: { key: this.key},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.key = result;
      console.log(this.key)
    });
  }
  submitForm() {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.key
    };
    const data = {
      prompt: this.prompt,
      model: this.model,
      size: this.size,
      n: this.numImages
    };
    const apiUrl = 'https://api.openai.com/v1/images/generations';

    this.http.post(apiUrl, data, { headers })
      .subscribe((response: any) => {
        this.responses = response.data.map((d: any) => d.url);
      });
  }
}
