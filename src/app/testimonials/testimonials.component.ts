import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  constructor(public translationService: TranslationService) {}

  testimonials = [
    { 
      author: this.translationService.translate('TESTIMONIALS.AUTHOR1'), 
      quote: this.translationService.translate('TESTIMONIALS.QUOTE1'), 
      imageSrc: 'assets/testimonial-author04.png' 
    },
    { 
      author: this.translationService.translate('TESTIMONIALS.AUTHOR2'), 
      quote: this.translationService.translate('TESTIMONIALS.QUOTE2'), 
      imageSrc: 'assets/testimonial-author05.png' 
    },
    { 
      author: this.translationService.translate('TESTIMONIALS.AUTHOR3'), 
      quote: this.translationService.translate('TESTIMONIALS.QUOTE3'), 
      imageSrc: 'assets/testimonial-author06.png' 
    }
  ];

  currentTestimonial = 0;

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
