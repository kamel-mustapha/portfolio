import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './services/common.service';
import { ServerService } from './services/server.service';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from './components/secondary-button/secondary-button.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PortfolioComponent,
    SkillsComponent,
    ContactComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [CommonService, ServerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
