import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials = [
    {
      author: 'John',
      quote: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      imageSrc: 'assets/testimonial-author01.png',
    },
    {
      author: 'Marie',
      quote: 'A simple Jump-and-Run game based on an object-oriented approach. Fight scary zombies and evil monsters with bombs while collecting Halloween candy.',
      imageSrc: 'assets/testimonial-author01.png',
    },
    {
      author: 'Bernd',
      quote: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      imageSrc: 'assets/testimonial-author01.png',
    },
  ];
}