import { Component, OnInit } from '@angular/core';
import { animations } from '../animations'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  animations: animations,
})
export class IndexComponent implements OnInit {
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  constructor(private titleService: Title) {}
  ngOnInit(): void {
    this.setTitle('Personal Website | Mustapha Kamel Dine');
  }
}
