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
    { author: 'Johann - Frontend Developer', quote: "Together we tackled a development project that required immediate, effective problem-solving and her ability to understand new tools and implement technical solutions stood out. Gloria's work contributed greatly to the project's success.", imageSrc: 'assets/testimonial-author04.png' },
    { author: 'Nicole - Frontend Developer', quote: "During the frontend training at the Developer Akademie (DA), Gloria's readiness to exchange strategies, suggest solutions, and provide encouragement  enhanced the collective learning experience — a quality that would serve any team well.", imageSrc: 'assets/testimonial-author05.png' },
    { author: 'David - Colleague', quote: "Over nine years of working together, Gloria demonstrated a strong command of diverse technical environments, adapting seamlessly to evolving requirements. Her reliability, versatility, and results-oriented mindset made a positive impact.", imageSrc: 'assets/testimonial-author06.png' },
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