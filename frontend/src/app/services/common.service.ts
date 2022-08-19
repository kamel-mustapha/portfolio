import { Injectable, isDevMode } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor() { }
  navbar_subject = new Subject
  static_links = {
    'background' : isDevMode() ? '../assets/coding.avif' : '/static/assets/coding.avif'
  }
  show_navbar(){
    this.navbar_subject.next(true)
  }

  hide_navbar(){
    this.navbar_subject.next(false)
  }  
}
