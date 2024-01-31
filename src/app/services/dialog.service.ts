import { Injectable } from '@angular/core';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Injectable({
  providedIn: 'root'
})
export class DialogService {
  // warn(arg0: string) {
  //   throw new Error('Method not implemented.');
  // }
  // filter(arg0: string) {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private _dialog: MatDialog) { }

  openConfirmDialog(msg: any){
    return this._dialog.open(ConfirmDialogComponent,{
      width:'390px',
      height:'150px',
      
      panelClass:'confirm-dialog-container',
      disableClose:true,
      position: {
    },
      data:{
        message:msg
      }
    });
  }
}
