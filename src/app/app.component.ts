import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  date = new Date();
  dateStringControl = new FormControl('2020-09-28');
  dateObjectControl = new FormControl(new Date());

  updateDate(event: any) {
    this.date = event.target.valueAsDate;
  }
}
