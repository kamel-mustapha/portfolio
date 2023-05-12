import { Component, OnInit, isDevMode } from '@angular/core';
import { animations } from '../animations';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: animations,
})
export class SkillsComponent implements OnInit {
  constructor(private titleService: Title) {}
  ngOnInit(): void {
    this.titleService.setTitle('Skills | Mustapha Kamel Dine');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  prod: boolean = true;
  skills_1: any[] = [
    {
      name: 'Python',
      image: isDevMode()
        ? '../../assets/python.svg'
        : '/static/assets/python.svg',
      stars: `
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
      `,
    },
    {
      name: 'Java',
      image: isDevMode() ? '../../assets/java.svg' : '/static/assets/java.svg',
      stars: `
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
      `,
    },
  ];

  skills_2: any[] = [
    {
      name: 'JavaScript',
      image: isDevMode()
        ? '../../assets/javascript.svg'
        : '/static/assets/javascript.svg',
      stars: `
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
      `,
      rounded: true,
    },
    {
      name: 'django',
      image: isDevMode()
        ? '../../assets/django.svg'
        : '/static/assets/django.svg',
      stars: `
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
      `,
      rounded: true,
    },
  ];

  skills_3: any[] = [
    {
      name: 'springboot',
      image: isDevMode()
        ? '../../assets/spring.svg'
        : '/static/assets/spring.svg',
      stars: `
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
      `,
    },
    {
      name: 'NodeJs',
      image: isDevMode() ? '../../assets/node.svg' : '/static/assets/node.svg',
      stars: `
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
      `,
    },
  ];

  skills_4: any[] = [
    {
      name: 'angular',
      image: isDevMode()
        ? '../../assets/angular.svg'
        : '/static/assets/angular.svg',
      stars: `
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
      `,
    },
    {
      name: 'HTML/CSS',
      image: isDevMode() ? '../../assets/html.svg' : '/static/assets/html.svg',
      stars: `
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      `,
    },
  ];
  skills_5: any[] = [
    {
      name: 'docker',
      image: isDevMode()
        ? '../../assets/docker.svg'
        : '/static/assets/docker.svg',
      stars: `
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
      `,
      rounded: true,
    },
    {
      name: 'AWS',
      image: isDevMode() ? '../../assets/aws.svg' : '/static/assets/aws.svg',
      stars: `
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
      `,
    },
  ];
  skills_6: any[] = [
    {
      name: 'SQL',
      image: isDevMode() ? '../../assets/sql.svg' : '/static/assets/sql.svg',
      stars: `
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
      `,
    },
    {
      name: 'talend',
      image: isDevMode()
        ? '../../assets/talend.svg'
        : '/static/assets/talend.svg',
      stars: `
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
      `,
    },
  ];
}
