import { Component, OnInit } from '@angular/core';
import { slideIn } from '../animations/slideIn';
import { fadeInOut } from '../animations/fadeInOut';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  animations: [slideIn, fadeInOut],
})
export class IndexComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
