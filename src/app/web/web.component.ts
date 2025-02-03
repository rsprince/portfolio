import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-web',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web.component.html',
  styleUrl: './web.component.scss'
})
export class WebComponent {

  imageList: string[] = [
    "ADP-psatool.jpg",
    "ADT-appointments.jpg",
    "ADT-appointments2.jpg",
    "ADT-mobiletech-apptdetail.jpg",
    "ADT-mobiletech-jobdetails.jpg",
    "CTaM-screen.jpg",
    "Cotton-home-0.jpg",
    "Cotton-products0.jpg",
    "Dell_IAM_Home.png",
    "Dell_IAM_Policy_create.png",
    "Dell_IAM_Policy_create2.png",
    "Dell_IAM_Policy_create3.png",
    "Dell_IAM_Policy_detail.png",
    "Dell_IAM_Policy_detail_edit.png",
    "Dell_IAM_manage_policies.png",
    "Dell_IAM_manage_policies2.png",
    "Dell_IAM_manage_screens.png",
    "JPay-com-Inmate-Services-basic2.jpg",
    "JPay-com-full-screen-2.jpg",
    "JPay-com-full-screen-w-search.jpg",
    "JPay-com-logged-in-vert-menu.jpg",
    "JPay-com-product-page.jpg",
    "JPay-com-redesign-1.jpg",
    "JPay-com-redesign-2.jpg",
    "Kiosk-Email-Inbox-attach-prepaid.jpg",
    "MS_doc_landing-page.jpg",
    "MobileTech-mockup2.jpg",
    "Solstice_mockup1.gif",
    "Solstice_mockup2.gif",
    "Solstice_mockup4.gif",
    "banco2.jpg",
    "banco3.jpg",
    "banco4.jpg",
    "boatsetter.jpg",
    "citihome_redesign.jpg",
    "cotton-design-detail.jpg",
    "cotton-designs1.jpg",
    "cotton-home0.jpg",
    "cotton-home1.jpg",
    "cotton-home2.jpg",
    "cotton-products-filter.jpg",
    "cotton-products-filter0.jpg",
    "cotton-products1.jpg",
    "cotton-screen-printing.jpg",
    "cotton-tonal-printing.jpg",
    "ethcur_menu.jpg",
    "ethicscur-home.jpg",
    "itskills-academy.jpg",
    "miamifilmoffice.jpg",
    "radioelectric.jpg",
    "redlightproject.jpg",
    "solstice_mockup3.gif",
    "startup-screen-mobiletech3A.jpg",
    "tf-shop-new-design-1.jpg",
    "tf-shop-new-design-2.jpg",
    "tf-shop-new-design-3.jpg"
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
    this.selectedImage = "images/web/" + imageUrl;  // Store the clicked image URL
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
