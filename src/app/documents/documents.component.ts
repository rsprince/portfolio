import { Component } from '@angular/core';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.scss'
})
export class DocumentsComponent {

	imageList: string[] = [
		"ATT-mockup1.png",
		"Android_Login-Register.jpg",
		"Confirm-Dialog-Styleguide.jpg",
		"Dialog-Boxes-styleguide.jpg",
		"Draft-Compose-Flow.jpg",
		"JPay-com-Site-w-labels.jpg",
		"Lists-styles.jpg",
		"Lists.jpg",
		"Main-Sections-styles.jpg",
		"Video-Chat-Step1-strybrd-flow.jpg",
		"Video-Chat-Step2-strybrd-flow.jpg",
		"Video-Chat-Step3-strybrd-flow.jpg",
		"design-workflow.png",
		"jpay-wireframe.jpg",
		"miamifilmoffice-wireframe.jpg"
	];

	selectedImage: string | null = null; // Stores the selected image
  isOverlayVisible = false; // Controls the visibility of the overlay

	constructor() {
    this.shuffleImages(); // Shuffle images on load
  }

	ngAfterViewInit(): void {
    setTimeout(() => {
      this.smoothScrollDown(); // Start scrolling down after 3 seconds
    }, 3000);
  }

  smoothScrollDown(): void {
    let currentPosition = window.scrollY;
    const step = 2; // Pixels per frame
    const interval = 50; // Time (ms) between frames
    let userInteracted = false;
    let lastScrollPosition = window.scrollY;
  
    // ✅ Dynamically determine the scrollable area (most reliable way)
    const scrollAmount = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    ) - window.innerHeight;
  
    /**
     * Stops scrolling when the user interacts
     */
    const breakScroll = (event: Event) => {
      const newScrollPosition = window.scrollY;
      const scrollDifference = Math.abs(newScrollPosition - lastScrollPosition);
  
      // ✅ Ignore tiny auto-scroll changes but allow clicks/mouse movements
      if (event.type === "scroll" && scrollDifference < step * 2) {
        console.log(`⚠ Ignoring minor scroll event: ${event.type}, difference=${scrollDifference}`);
        return;
      }
  
      console.log(`🛑 User interaction detected. Event: ${event.type}, difference=${scrollDifference}`);
      userInteracted = true;
      clearInterval(scrollInterval);
  
      // ✅ Remove event listeners
      document.removeEventListener("scroll", breakScroll);
      document.removeEventListener("mousemove", breakScroll);
      document.removeEventListener("click", breakScroll);
    };
  
    // ✅ Attach event listeners immediately for click/mousemove
    document.addEventListener("mousemove", breakScroll);
    document.addEventListener("click", breakScroll);
    
    // ✅ Delay scroll listener to avoid capturing auto-scroll events
    setTimeout(() => {
      console.log("🔄 Scroll listener activated.");
      document.addEventListener("scroll", breakScroll);
    }, 500);
  
    /**
     * Auto-scroll function
     */
    const scrollInterval = setInterval(() => {
      if (userInteracted || currentPosition >= scrollAmount) {
        console.log(`✅ Stopping scroll at ${currentPosition}`);
        clearInterval(scrollInterval);
        return;
      }
  
      lastScrollPosition = window.scrollY;
      currentPosition += step;
      window.scrollTo(0, currentPosition);
    }, interval);
  }

  shuffleImages(): void {
    for (let i = this.imageList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Random index
      [this.imageList[i], this.imageList[j]] = [this.imageList[j], this.imageList[i]]; // Swap elements
    }
  }

  openImage(imageUrl: string): void {
    this.selectedImage = "images/documents/" + imageUrl;  // Store the clicked image URL
		console.log("Opening image:", imageUrl); // Debugging log
    this.isOverlayVisible = true;   // Show the overlay
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  }
  
  closeImage(): void {
    this.isOverlayVisible = false; 
    this.selectedImage = null;
    document.body.style.overflow = "auto"; // Restore scrolling
  }
  
}
