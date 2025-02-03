import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  ngOnInit(): void {
    this.playCarousel();
  }

  playCarousel() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const slideDelay = [6000, 6000, 6000, 6000, 6000, 6000, 10000]; // Delays in milliseconds

    function showNextSlide() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
      setTimeout(showNextSlide, slideDelay[currentSlide]);
    }

    // Initialize the first slide
    slides[currentSlide].classList.add('active');
    setTimeout(showNextSlide, slideDelay[currentSlide]);

  }


}
