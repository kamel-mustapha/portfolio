import { Component, OnInit, isDevMode } from '@angular/core';
import { animations } from '../animations'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: animations
})
export class SkillsComponent implements OnInit {
  constructor(private titleService: Title) { }
  ngOnInit(): void {
    this.titleService.setTitle('Skills | Mustapha Kamel Dine');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  prod : boolean = true
  dev_skills : any[] = [
    {
      name : 'Python',
      image : isDevMode() ? '../../assets/python.svg' : '/static/assets/python.svg',
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
      image : isDevMode() ? '../../assets/node.svg' : '/static/assets/node.svg' ,
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
      image : isDevMode() ? '../../assets/html.svg' : '/static/assets/html.svg',
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
      image : isDevMode() ? '../../assets/javascript.svg' : '/static/assets/javascript.svg',
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
      image : isDevMode() ? '../../assets/django.svg' : '/static/assets/django.svg',
      stars: `
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
      `
    },
    {
      name : 'angular',
      image : isDevMode() ? '../../assets/angular.svg' : '/static/assets/angular.svg',
      stars: `
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
      `
    },
  ]
  
  devops_skills : any[] = [
    {
      name : 'docker',
      image : isDevMode() ? '../../assets/docker.svg' : '/static/assets/docker.svg',
      stars: `
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
      `
    },
    {
      name : 'AWS',
      image : isDevMode() ? '../../assets/aws.svg' :  '/static/assets/aws.svg',
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
