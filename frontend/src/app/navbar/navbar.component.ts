import { Component, OnInit } from '@angular/core';
import { animations } from '../animations';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: animations
})

export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navbar_mobile: boolean = false;

  click_navbar_mobile(){
    this.navbar_mobile = !this.navbar_mobile
  }
}
