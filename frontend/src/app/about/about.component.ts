import { Component, OnInit, isDevMode } from '@angular/core';
import { animations } from '../animations';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: animations,
})
export class AboutComponent implements OnInit {
  constructor(private titleService: Title) {}
  ngOnInit(): void {
    this.titleService.setTitle('About | MKD');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  imgUrls = {
    about: isDevMode() ? '/assets/about-me.svg' : '/static/assets/about-me.svg',
  };
}
