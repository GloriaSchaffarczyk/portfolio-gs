import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  arrowSrc = '../../assets/home-arrow-white.png';

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)]),
    privacy: new FormControl(false, Validators.requiredTrue)
  });

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      // Hier kannst du die Daten verarbeiten (z.B. per HTTP senden)
    }
  }

  swapArrow(isHovered: boolean) {
    this.arrowSrc = isHovered
      ? '../../assets/home-arrow-green.png'
      : '../../assets/home-arrow-white.png';
  }
  
}
