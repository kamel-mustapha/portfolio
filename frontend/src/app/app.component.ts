import { Component, OnInit } from '@angular/core';
import { animations } from './animations'
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: animations,
})

export class AppComponent implements OnInit {
  constructor(private common : CommonService){}
  ngOnInit(): void {

  }

}
