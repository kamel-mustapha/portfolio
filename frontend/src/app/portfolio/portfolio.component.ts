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
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  constructor(private titleService: Title) {}
  ngOnInit(): void {
    this.setTitle('Portfolio | Mustapha Kamel Dine');
  }
}
