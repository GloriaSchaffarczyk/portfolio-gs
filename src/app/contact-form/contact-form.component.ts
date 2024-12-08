import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  http = inject(HttpClient);
  arrowSrc = '../../assets/home-arrow-white.png';

  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false
  };

  onSubmit(contactForm: any) {
    if (contactForm.valid) {
      console.log('Form Data:', this.contactData);
      contactForm.resetForm(); // Reset the form after submission
    }
  }

  swapArrow(isHovered: boolean) {
    this.arrowSrc = isHovered
      ? '../../assets/home-arrow-green.png'
      : '../../assets/home-arrow-white.png';
  }
}
