import { Component ,OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
 
  message:any 
   

constructor(@Inject(MAT_DIALOG_DATA) public data:any,
public _dialogRef: MatDialogRef<ConfirmDialogComponent>){
  this.message = data.message;
  
}
ngOnInit(): void {
  
}
 closeDialog(){
  this._dialogRef.close(false);
 }
}
