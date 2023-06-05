import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.css']
})
export class CreateDialogComponent implements OnInit{
  public type: any;
  public fileName: any;

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onFileSelected(event: any) {

    const file: File = event.target.files[0];

    if (file) {
      this.data.film.imagen = file;
      this.fileName = file.name;
    }
  }

  ngOnInit(): void {
    if(this.data.film) {
      this.type = 'film';
    } else if(this.data.user) {
      this.type = 'user'
    } else {
      console.log(this.data.sala)
      this.type = 'sala'
    }
  }
}
