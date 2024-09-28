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
    { author: 'Bernd', quote: 'Based on the PokéAPI.', imageSrc: 'assets/testimonial-author01.png' }
  ];

  currentTestimonial = 0;

  slideLeft() {
    if (this.currentTestimonial === 0) {
      this.currentTestimonial = this.testimonials.length - 1; // Zurück zum letzten Testimonial
    } else {
      this.currentTestimonial--;
    }
    this.updateSlidePosition();
  }

  slideRight() {
    if (this.currentTestimonial === this.testimonials.length - 1) {
      this.currentTestimonial = 0; // Zurück zum ersten Testimonial
    } else {
      this.currentTestimonial++;
    }
    this.updateSlidePosition();
  }

  updateSlidePosition() {
    const testimonialWrapper = document.querySelector('.testimonial-wrapper') as HTMLElement;
    testimonialWrapper.style.transform = `translateX(-${this.currentTestimonial * 100}%)`;
  }
}
