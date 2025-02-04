import { Component } from '@angular/core';

@Component({
  selector: 'app-tablet',
  standalone: true,
  imports: [],
  templateUrl: './tablet.component.html',
  styleUrl: './tablet.component.scss'
})
export class TabletComponent {
  imageList: string[] = [
    "0-ForgotPassword.jpg",
    "0_Register-1-revised.jpg",
    "0_Register-1.jpg",
    "0_Register-2-revised.jpg",
    "0_Register-2.jpg",
    "0_login-v1-revised.jpg",
    "0_login-v1.jpg",
    "0_login-v2.jpg",
    "1_1_home.jpg",
    "1_1b_home.jpg",
    "1_1c_home.jpg",
    "1_1d_home.jpg",
    "1_2_SetQuestions.jpg",
    "1_3_add_contact-v2.jpg",
    "1_3_add_contact.jpg",
    "2-Money-1b-Accounts-Statement-collapsable1.jpg",
    "2-Money-1b-Accounts-Statement.jpg",
    "2-Money-2-Transfers-1.jpg",
    "2-Money-2-Transfers-2-keyboard.jpg",
    "2-Money-3-Send-1.jpg",
    "2-Money-3-Send-2-keyboard.jpg",
    "2-Money-4-Request-1.jpg",
    "2-Money-4-Request-2-keyboard.jpg",
    "3-Email-1-Inbox.jpg",
    "3-Email-1b-Inbox-w-Delete.jpg",
    "3-Email-2-Inbox-MsgDetail.jpg",
    "3-Email-3b-ComposeTo.jpg",
    "3-Email-3c-Compose-attach-step2.jpg",
    "3-Email-3c-Compose-attach-step2b.jpg",
    "3-Email-3c-Compose-attach-step3.jpg",
    "3-Email-4-Stamps.jpg",
    "3-Email-Compose.jpg",
    "4-VideoVisit.jpg",
    "5-Music-1-Featured.jpg",
    "5-Music-2-New.jpg",
    "ActionBar-Calendar.jpg",
    "ActionBar-Grievances.jpg",
    "Kiosk-Home-notifications.jpg",
    "attract-1-date-location.jpg",
    "attract-2-time-weather.jpg",
    "attract-fact1-question.jpg",
    "attract-fact2-answer.jpg",
    "JP4-home.jpg",
  ];

  selectedImage: string | null = null; // Stores the selected image
  isOverlayVisible = false; // Controls the visibility of the overlay

	constructor() {
    this.shuffleImages(); // Shuffle images on load
  }

	ngAfterViewInit(): void {
    setTimeout(() => {
      this.smoothScrollDown(); // Start scrolling down after 3 seconds
    }, 2000);
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
    this.selectedImage = "images/tablet/" + imageUrl;  // Store the clicked image URL
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
