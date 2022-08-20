import { Component, OnInit, isDevMode } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  statics_links = {
    'personal' : isDevMode() ? '../../assets/personal-picture.jpg' : '/static/assets/personal-picture.jpg'
  }

}
