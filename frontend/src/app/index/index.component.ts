import { Component, OnInit, isDevMode } from '@angular/core';
import { animations } from '../animations';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  animations: animations,
})
export class IndexComponent implements OnInit {
  constructor(private titleService: Title) {}
  ngOnInit(): void {
    this.titleService.setTitle('Personal Website | MKD');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  imgUrls = {
    index: isDevMode()
      ? '/assets/illustration-1.svg'
      : '/static/assets/illustration-1.svg',
    arrow: isDevMode()
      ? '/assets/arrow-down.svg'
      : '/static/assets/arrow-down.svg',
  };
}
