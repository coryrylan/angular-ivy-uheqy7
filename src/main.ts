import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <h2>Binding Date Objects to the HTML datepicker in Angular</h2>

    <label for="date-string">Regular string value</label>
    <input [formControl]="dateStringControl" type="date" id="date-string" />


    <label for="date-object">Date object value with directive help</label>
    <input [formControl]="dateObjectControl" type="date" id="date-object" />


    <label for="date">Native date object value</label>
    <input [valueAsDate]="date" (change)="updateDate($event)" type="date" id="date" />


    <h3>Values</h3>

    <p>String Value:<br> {{dateStringControl.value}}</p>
    <p>Date Object:<br> {{dateObjectControl.value}}</p>
    <p>Date (Native):<br> {{date}}</p>
  `,
})
export class App {
  date = new Date();
  dateStringControl = new FormControl('2020-09-28');
  dateObjectControl = new FormControl(new Date());

  updateDate(event: any) {
    this.date = event.target.valueAsDate;
  }
}

bootstrapApplication(App);
