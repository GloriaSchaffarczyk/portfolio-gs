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