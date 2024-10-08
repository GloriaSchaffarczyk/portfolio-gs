import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { IntroComponent } from "./intro/intro.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsComponent } from "./skills/skills.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { FooterComponent } from "./footer/footer.component";
// was muss noch importiert werden?

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, IntroComponent, AboutMeComponent, SkillsComponent, PortfolioComponent, TestimonialsComponent, ContactFormComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-gs';
}
