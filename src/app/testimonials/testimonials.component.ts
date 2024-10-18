import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials = [
    { author: 'John', quote: 'Task manager inspired by the Kanban System.', imageSrc: 'assets/testimonial-author01.png' },
    { author: 'Marie', quote: 'A simple Jump-and-Run game.', imageSrc: 'assets/testimonial-author01.png' },
    { author: 'Bernd', quote: 'Based on the PokéAPI.', imageSrc: 'assets/testimonial-author01.png' },
    { author: 'Nicole', quote: 'She is amazing.', imageSrc: 'assets/testimonial-author01.png' }
  ];

  currentTestimonial = 0;

  slideLeft() {
    this.resetAnimation();
    if (this.currentTestimonial !== 0) {
      this.currentTestimonial--;
    } else {
      this.currentTestimonial = this.testimonials.length - 1;
    }
  }
  
  slideRight() {
    this.resetAnimation();
    if (this.currentTestimonial < this.testimonials.length - 1) {
      this.currentTestimonial++;
    } else {
      this.currentTestimonial = 0;
    }
  }
  
  resetAnimation() {
    const quoteElement = document.querySelector('.quote') as HTMLElement;
    const imageElement = document.querySelector('.testimonial-img img') as HTMLElement;
    
    if (quoteElement && imageElement) {
      // Reset animation for the quote
      quoteElement.style.animation = 'none';
      // Reset animation for the image
      imageElement.style.animation = 'none';
  
      // Use setTimeout to re-trigger the animations
      setTimeout(() => {
        quoteElement.style.animation = '';
        imageElement.style.animation = '';
      }, 10);
    }
  }  
}
