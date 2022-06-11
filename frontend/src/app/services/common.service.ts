import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor() { }
  navbar_subject = new Subject

  show_navbar(){
    this.navbar_subject.next(true)
  }

  hide_navbar(){
    this.navbar_subject.next(false)
  }  
}
