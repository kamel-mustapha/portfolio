import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.css'],
})
export class PrimaryButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() full = false;
}
