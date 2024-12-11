import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  http = inject(HttpClient);
  arrowSrc = '../../assets/home-arrow-white.png';

  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };

  showPopup = false;
  popupMessage = '';
  popupColor = '#00bf89';

  onSubmit(contactForm: any) {
    if (contactForm.valid) {
      // Simulate success response
      setTimeout(() => {
        this.showPopupMessage('Your message has been sent successfully!', '#00bf89');
        contactForm.resetForm();
      }, 500);

      // Uncomment the actual API call in production
      // this.http.post('https://www.gloriacodes.de/sendMail.php', this.contactData).subscribe({
      //   next: () => this.showPopupMessage('Your message has been sent successfully!', '#00bf89'),
      //   error: () => this.showPopupMessage('Failed to send your message. Try again later.', '#ff3f79'),
      // });
    }
  }

  showPopupMessage(message: string, color: string) {
    this.popupMessage = message;
    this.popupColor = color;
    this.showPopup = true;

    setTimeout(() => {
      this.showPopup = false;
    }, 3000);
  }

  swapArrow(isHovered: boolean) {
    this.arrowSrc = isHovered
      ? '../../assets/home-arrow-green.png'
      : '../../assets/home-arrow-white.png';
  }
}
