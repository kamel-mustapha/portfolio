import { Component, OnInit } from '@angular/core';
import { slideIn } from '../animations/slideIn';
import { fadeInOut } from '../animations/fadeInOut';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  animations: [slideIn, fadeInOut],
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
