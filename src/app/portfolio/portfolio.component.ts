import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// buttons stylen 

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects = [
    {
      title: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      imageSrc: 'assets/portfolio-join.png',
      liveTestLink: 'https://join.com',
      githubLink: 'https://github.com/join',
      reverseLayout: false,
    },
    {
      title: 'Monster munching madness',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Fight scary zombies and evil monsters with bombs while collecting Halloween candy.',
      technologies: ['JavaScript', 'OOP', 'HTML', 'CSS'],
      imageSrc: 'assets/portfolio-sharkie.png',
      liveTestLink: 'https://sharkie.com',
      githubLink: 'https://github.com/sharkie',
      reverseLayout: true,
    },
    {
      title: 'Pokédex',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      technologies: ['JavaScript', 'RESTful API', 'HTML', 'CSS'],
      imageSrc: 'assets/portfolio-pokedex.png',
      liveTestLink: 'https://join.com',
      githubLink: 'https://github.com/join',
      reverseLayout: false,
    },
  ];
}

