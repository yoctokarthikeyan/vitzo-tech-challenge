import { Component } from '@angular/core'; import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SliderResultDialog } from './modals/slider-result.dialog';

export interface DialogData {
  sliderRangeValue: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tech-challenge';
  sliderRangeValue: number = 0;
  isDark: boolean = true;
  formatLabel(value: number) {
    return value;
  }

  constructor(public dialog: MatDialog) { }

  /*
   This function is used to open the popup which shows the current Slider value
  */
  onSubmit(): void {
    const dialogRef = this.dialog.open(SliderResultDialog, {
      width: '400px',
      data: { sliderRangeValue: this.sliderRangeValue }
    });
  }
}



