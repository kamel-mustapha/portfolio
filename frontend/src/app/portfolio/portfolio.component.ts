import { Component, OnInit } from '@angular/core';
import { animations } from '../animations';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: animations,
})
export class PortfolioComponent implements OnInit {
  constructor(private titleService: Title) {}
  ngOnInit(): void {
    this.titleService.setTitle('Portfolio | Mustapha Kamel Dine');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
