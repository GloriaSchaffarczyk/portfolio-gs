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
    { author: 'Johann', quote: "Gloria designed and implemented the level layout for our Jump 'n' Run game using Unity during a Game Development Workshop. Her technical skills and eagerness to learn were evident from the start, and working with her was a pleasure.", imageSrc: 'assets/testimonial-author04.png' },
    { author: 'Nicole', quote: "Gloria and I began our training as frontend developers at the Developer Akademie (DA) at the same time. She’s incredibly persistent, and we constantly exchanged ideas to tackle challenges effectively.", imageSrc: 'assets/testimonial-author05.png' },
    { author: 'David', quote: "I’ve worked with Gloria for nine years, during which she has handled tasks such as managing our CMS platforms WordPress and Redaxo. She is knowledgeable, dependable, and adapts her skills seamlessly to various digital environments.", imageSrc: 'assets/testimonial-author06.png' },
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