import { Component } from '@angular/core';
import persons from './data/persons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  persons = persons
 }
