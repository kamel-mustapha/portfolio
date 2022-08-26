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
  constructor(private titleService: Title) {}
  ngOnInit(): void {
    this.titleService.setTitle('Personal Website | Mustapha Kamel Dine');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
