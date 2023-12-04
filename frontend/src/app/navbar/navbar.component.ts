import { Component, OnInit } from '@angular/core';
import { animations } from '../animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: animations,
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    document.addEventListener('scroll', () => {
      if (window.scrollY >= 20) {
        this.isScroll = true;
      } else {
        this.isScroll = false;
      }
    });
  }
  isScroll: boolean = false;
  navbar_mobile: boolean = false;
  links = [
    {
      name: 'home',
      link: '/',
    },
    {
      name: 'about',
      link: '/about',
    },
    {
      name: 'portfolio',
      link: '/portfolio',
    },
    {
      name: 'skills',
      link: '/skills',
    },
  ];

  mobileDropdown = false;

  click_navbar_mobile() {
    this.navbar_mobile = !this.navbar_mobile;
  }
}
