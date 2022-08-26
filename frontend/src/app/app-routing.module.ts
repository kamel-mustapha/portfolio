import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component'
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'skills', component: SkillsComponent},
  { path : 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent},
  { path: 'resume', component: ResumeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
