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
    this.nav = false;
    this.mobile_nav = false;
    document.addEventListener('scroll', ()=>{
      this.on_scroll()
    })
    
  }
  static_links = this.common.static_links
  scrolled : boolean = false
  prod : boolean = true
  mobile_nav: boolean = false;
  nav: boolean = false;

  navbar_links = [
    {
      title : 'skills',
      icon: 'code',
      link: '/skills'
    },
    {
      title : 'portfolio',
      icon : 'briefcase',
      link: ''
    },
    {
      title : 'about',
      icon : 'address-card',
      link : ''
    },
  ]

  flip_footer : any = {
    flip_1 : false,
    flip_2 : false,
    flip_3 : false,
    flip_4 : false,
  }
  
  show_nav(){
    this.nav = !this.nav
  }
  
  hide_nav(){
    this.nav = false
    this.mobile_nav = false
  }
  
  show_mobile_nav() {
    this.mobile_nav = !this.mobile_nav;
  }

  hover_footer (link:number){
    this.flip_footer[`flip_${link}`] = true
    console.log(this.flip_footer)
  }

  unhover_footer (link:number){
    this.flip_footer[`flip_${link}`] = false
    console.log(this.flip_footer)
  }

  on_scroll(){
    if(window.pageYOffset >= 50){
      this.scrolled = true
    } else {
      this.scrolled = false
    }
  }

}
