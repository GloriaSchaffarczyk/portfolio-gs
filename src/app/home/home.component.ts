import { AfterViewInit, Component, ElementRef, Inject } from '@angular/core';
import { IntroComponent } from '../intro/intro.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsComponent } from '../skills/skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

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
    <app-intro class="animate-on-scroll"></app-intro>
    <app-about-me class="animate-on-scroll"></app-about-me>
    <app-skills class="animate-on-scroll"></app-skills>
    <app-portfolio class="animate-on-scroll"></app-portfolio>
    <app-testimonials class="animate-on-scroll"></app-testimonials>
    <app-contact-form class="animate-on-scroll"></app-contact-form>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  constructor(
    private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const elements: NodeListOf<HTMLElement> = this.elementRef.nativeElement.querySelectorAll('.animate-on-scroll');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).classList.add('visible');
            }
          });
        },
        { threshold: 0.3 }
      );

      elements.forEach((el: HTMLElement) => observer.observe(el));
    } else {
      console.warn('Intersection Observer wird auf dem Server nicht ausgeführt.');
    }
  }
}
