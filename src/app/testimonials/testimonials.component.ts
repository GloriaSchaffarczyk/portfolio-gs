import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials = [
    { 
      authorKey: 'TESTIMONIALS.AUTHOR1', 
      quoteKey: 'TESTIMONIALS.QUOTE1', 
      imageSrc: 'assets/testimonial-author04.png' 
    },
    { 
      authorKey: 'TESTIMONIALS.AUTHOR2', 
      quoteKey: 'TESTIMONIALS.QUOTE2', 
      imageSrc: 'assets/testimonial-author05.png' 
    },
    { 
      authorKey: 'TESTIMONIALS.AUTHOR3', 
      quoteKey: 'TESTIMONIALS.QUOTE3', 
      imageSrc: 'assets/testimonial-author06.png' 
    }
  ];

  currentTestimonial = 0;

  constructor(public translationService: TranslationService) {}

  slideLeft() {
    this.resetAnimation();
    if (this.currentTestimonial !== 0) {
      this.currentTestimonial--;
    } else {
      this.currentTestimonial = this.testimonials.length - 1;
    }
    this.triggerAnimation();
  }

  slideRight() {
    this.resetAnimation();
    if (this.currentTestimonial < this.testimonials.length - 1) {
      this.currentTestimonial++;
    } else {
      this.currentTestimonial = 0;
    }
    this.triggerAnimation();
  }

  resetAnimation() {
    const testimonialLine = document.querySelector('.testimonial-line') as HTMLElement;
    if (testimonialLine) {
      testimonialLine.classList.remove('animate');
    }
  }

  triggerAnimation() {
    const testimonialLine = document.querySelector('.testimonial-line') as HTMLElement;
    if (testimonialLine) {
      setTimeout(() => {
        testimonialLine.classList.add('animate');
      }, 10);
    }
  }
}
