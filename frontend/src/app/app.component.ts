import { Component, OnInit } from '@angular/core';
import { animations } from './animations'
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: animations,
})
export class AppComponent {
  mobile_nav: boolean = false;
  show_mobile_nav() {
    this.mobile_nav = !this.mobile_nav;
  }
}
