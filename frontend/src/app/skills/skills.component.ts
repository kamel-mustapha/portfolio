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
  }

  dev_skills : any[] = [
    {
      name : 'Python',
      image : 'python.svg',
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
      image : 'node.svg',
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
      image : 'html.svg',
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
      image : 'javascript.svg',
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
      image : 'django.svg',
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
      image : 'angular.svg',
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
      image : 'docker.svg',
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
      image : 'aws.svg',
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
