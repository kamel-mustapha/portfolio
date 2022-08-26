import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { animations } from '../animations';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  animations: animations
})
export class ResumeComponent implements OnInit {
  constructor(private titleService: Title) { }
  ngOnInit(): void {
    this.titleService.setTitle('Resume | Mustapha Kamel Dine');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

}
