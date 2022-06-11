import { Component, OnInit } from '@angular/core';
import { animations } from '../animations'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: animations
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if(window.location.href.includes('localhost')){
      this.prod = false
    }
  }
  prod : boolean = true
  dev_skills : any[] = [
    {
      name : 'Python',
      image : this.prod ? '../../assets/python.svg' : '/static/assets/python.svg',
      stars: `
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
      `
    },
    {
      name : 'NodeJs',
      image : this.prod ? '../../assets/node.svg' : '/static/assets/node.svg',
      stars: `
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
      `
    },
  ]

  web_skills : any[] = [
    {
      name : 'HTML/CSS',
      image : this.prod ? '../../assets/html.svg' : '/static/assets/html.svg',
      stars: `
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      `
    },
    {
      name : 'JavaScript',
      image : this.prod ? '../../assets/javascript.svg' : '/static/assets/javascript.svg',
      stars: `
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
      `
    },
  ]

  framworks_skills : any[] = [
    {
      name : 'django',
      image : this.prod ? '../../assets/django.svg' : '/static/assets/django.svg',
      stars: `
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      `
    },
    {
      name : 'angular',
      image : this.prod ? '../../assets/angular.svg' : '/static/assets/angular.svg',
      stars: `
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
      `
    },
  ]
  
  devops_skills : any[] = [
    {
      name : 'docker',
      image : this.prod ? '../../assets/docker.svg' : '/static/assets/docker.svg',
      stars: `
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
      `
    },
    {
      name : 'AWS',
      image : this.prod ? '../../assets/aws.svg' : '/static/assets/aws.svg',
      stars: `
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
      `
    },
  ]

}
