import {Component, Inject, ViewChild} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';


@Component({
  moduleId: module.id,
  selector: 'shop',
  templateUrl: 'shop.html',
  styleUrls: ['shop.css'],
})
export class DialogDemo {
  dialogRef: MdDialogRef<JazzDialog>;
  lastCloseResult: string;
  actionsAlignment: string;
  config: MdDialogConfig = {
    disableClose: false,
    width: '',
    height: '',
    position: {
      top: '',
      bottom: '',
      left: '',
      right: ''
    },
    data: {
      money: 50
    }
  };

  constructor(public dialog: MdDialog, @Inject(DOCUMENT) doc: any) {
    // Possible useful example for the open and closeAll events.
    // Adding a class to the body if a dialog opens and
    // removing it after all open dialogs are closed
    dialog.afterOpen.subscribe((ref: MdDialogRef<any>) => {
      if (!doc.body.classList.contains('no-scroll')) {
        doc.body.classList.add('no-scroll');
      }
    });
    dialog.afterAllClosed.subscribe(() => {
      doc.body.classList.remove('no-scroll');
    });
  }

  openJazz() {
    this.dialogRef = this.dialog.open(JazzDialog, this.config);

    this.dialogRef.afterClosed().subscribe((result: string) => {
      this.lastCloseResult = result;
      this.dialogRef = null;
      debugger
    });
  }
}




@Component({
  selector: 'shop-dialog',
  templateUrl: 'shop-dialog.html'

})
export class JazzDialog {
  private _dimesionToggle = false;

  constructor( 
    public dialogRef: MdDialogRef<JazzDialog>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

    ///this.dialogRef.updateSize(w,h), this.dialogRef.updatePosition(top,left,right,bottom)
}
