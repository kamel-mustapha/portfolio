import { Component, OnInit } from '@angular/core';
import { slideRight } from './animations/slideRight';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideRight],
})
export class AppComponent implements OnInit {
  mobile_nav: boolean = false;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.navigate(['/about/']);
  }

  show_mobile_nav() {
    this.mobile_nav = !this.mobile_nav;
  }
}
