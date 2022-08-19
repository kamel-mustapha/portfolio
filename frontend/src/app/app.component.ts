import { Component, OnInit } from '@angular/core';
import { animations } from './animations'
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: animations,
})
export class AppComponent implements OnInit {
  scrolled : boolean = false
  ngOnInit(): void {
    if(window.location.href.includes('localhost')){
      this.prod = false
    }
    this.nav = false;
    this.mobile_nav = false;
    document.addEventListener('scroll', ()=>{
      this.on_scroll()
    })
  }
  
  navbar_links = [
    {
      title : 'skills',
      icon: 'code'
    },
    {
      title : 'portfolio',
      icon : 'briefcase'
    },
    {
      title : 'about',
      icon : 'address-card'
    },
  ]
  flip_footer : any = {
    flip_1 : false,
    flip_2 : false,
    flip_3 : false,
    flip_4 : false,
  }
  prod : boolean = true
  mobile_nav: boolean = false;
  nav: boolean = false;
  
  show_nav(){
    this.nav = !this.nav
  }
  
  hide_nav(){
    this.nav = false
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
    console.log(window.pageYOffset)
    if(window.pageYOffset >= 50){
      this.scrolled = true
    } else {
      this.scrolled = false
    }
  }

}
