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
    if(!window.location.href.includes('localhost')){
      this.prod = true
    }
  }

  prod : boolean = true
  dev_skills : any[] = [
    {
      name : 'Python',
      image : this.prod ? '/static/assets/python.svg' : '../../assets/python.svg',
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
      image : this.prod ? '/static/assets/node.svg' : '../../assets/node.svg',
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
      image : this.prod ? '/static/assets/html.svg' : '../../assets/html.svg',
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
      image : this.prod ? '/static/assets/javascript.svg' : '../../assets/javascript.svg',
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
      image : this.prod ? '/static/assets/django.svg' : '../../assets/django.svg',
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
      image : this.prod ? '/static/assets/angular.svg' : '../../assets/angular.svg',
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
      image : this.prod ? '/static/assets/docker.svg' : '../../assets/docker.svg',
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
      image : this.prod ? '/static/assets/aws.svg' : '../../assets/aws.svg',
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
