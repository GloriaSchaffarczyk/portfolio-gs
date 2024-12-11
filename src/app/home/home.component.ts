import { Component } from '@angular/core';
import { IntroComponent } from '../intro/intro.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsComponent } from '../skills/skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    IntroComponent,
    AboutMeComponent,
    SkillsComponent,
    PortfolioComponent,
    TestimonialsComponent,
    ContactFormComponent,
  ],
  template: `
    <app-intro></app-intro>
    <app-about-me></app-about-me>
    <app-skills></app-skills>
    <app-portfolio></app-portfolio>
    <app-testimonials></app-testimonials>
    <app-contact-form></app-contact-form>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}

