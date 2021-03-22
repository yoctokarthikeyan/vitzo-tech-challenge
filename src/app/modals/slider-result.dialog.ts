import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogData } from "../app.component";

@Component({
    selector: 'slider-result-dialog',
    templateUrl: 'slider-result.dialog.html'
})
export class SliderResultDialog {

    constructor(
        public dialogRef: MatDialogRef<SliderResultDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}