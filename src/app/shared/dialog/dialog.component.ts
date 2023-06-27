import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  standalone:true,
  imports: [MatDialogModule, MatButtonModule]
})
export class DialogComponent {
  constructor(public dialogRef: MatDialogRef<DialogComponent>) { }

  close(): void {
    this.dialogRef.close();
  }
}
