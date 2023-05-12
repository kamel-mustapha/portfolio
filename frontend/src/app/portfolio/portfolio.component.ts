import { Component, OnInit, isDevMode } from '@angular/core';
import { animations } from '../animations';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: animations,
})
export class PortfolioComponent implements OnInit {
  constructor(private titleService: Title) {}
  ngOnInit(): void {
    this.titleService.setTitle('Portfolio | Mustapha Kamel Dine');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  activeImage: number = 0;
  projects: any[] = [
    {
      name: 'Minelead',
      role: 'Full Stack Developer',
      description:
        'Minelead is a tool that performs three key functions: finding and verifying professional email addresses, generating leads, and providing a campaigns tool, along with seamless integrations with other services.',
      isLink: true,
      link: 'https://minelead.io',
      fields: ['SaaS', 'Marketing', 'Campaigns', 'Python', 'Django', 'AWS'],
      images: [
        {
          link: isDevMode()
            ? '../../assets/minelead.jpg'
            : '/static/assets/minlead.jpg',
          active: true,
        },
      ],
    },
    {
      name: 'Lamacta',
      role: 'Full Stack Developer',
      description:
        'Lamacta is a comprehensive real-estate website that not only provides information and news about the real-estate market in Algeria, but also offers an estimator service for property valuation.',
      isLink: true,
      link: 'https://lamacta.com',
      fields: ['SaaS', 'Real Estate', 'Python', 'Django', 'AWS'],
      images: [
        {
          link: isDevMode()
            ? '../../assets/lamacta.jpg'
            : '/static/assets/lamacta.jpg',
          active: true,
        },
      ],
    },
    {
      name: 'Statuschecks',
      role: 'Founder / Full Stack Developer',
      description:
        'Statuschecks is a monitoring service that offers a real-time alerts feature to notify users via email in case of any failures detected in a website or API. Additionally, it provides comprehensive statistics to users through a user-friendly interface.',
      isLink: true,
      link: 'https://statuschecks.net',
      fields: [
        'SaaS',
        'Monitoring',
        'Python',
        'Django',
        'Angular',
        'Tailwind',
        'AWS',
      ],
      images: [
        {
          link: isDevMode()
            ? '../../assets/statuschecks.jpg'
            : '/static/assets/statuschecks.jpg',
          active: true,
        },
      ],
    },
    {
      name: 'Easygestion',
      role: 'Founder / Full Stack Developer',
      description:
        'Easygestion is a software solution tailored for traders in the school canteen management industry. It facilitates efficient stock management, enables seamless sales processes, and automates the creation of invoices and delivery notes.',
      isLink: false,
      fields: [
        'Commerce',
        'ERP',
        'Python',
        'Django',
        'PyInstaller',
        'Angular',
        'Electron',
        'Tailwind',
      ],
      images: [
        {
          link: isDevMode()
            ? '../../assets/gestion.jpg'
            : '/static/assets/gestion.jpg',
          active: true,
        },
      ],
    },
    {
      name: 'MyMarket',
      role: 'Founder / Full Stack Developer',
      description:
        'Mymarket is a software solution specifically designed for merchants operating in the supermarket and grocery management industry. It facilitates effective management of both stock and cash.',
      isLink: false,
      fields: [
        'Commerce',
        'ERP',
        'Python',
        'Django',
        'PyInstaller',
        'Angular',
        'Electron',
        'Tailwind',
      ],
      images: [
        {
          link: isDevMode()
            ? '../../assets/market.jpg'
            : '/static/assets/market.jpg',
          active: true,
        },
      ],
    },
    {
      name: 'MyCoffee',
      role: 'Founder / Full Stack Developer',
      description:
        'Mycoffee is a software solution designed for cafeteria owners and operators. It enables effective management of cash and stock, along with accurate calculation of expenses and profits.',
      isLink: false,
      fields: [
        'Commerce',
        'ERP',
        'Python',
        'Django',
        'PyInstaller',
        'Angular',
        'Electron',
        'Tailwind',
      ],
      images: [
        {
          link: isDevMode()
            ? '../../assets/coffee.jpg'
            : '/static/assets/coffee.jpg',
          active: true,
        },
      ],
    },
  ];
}
