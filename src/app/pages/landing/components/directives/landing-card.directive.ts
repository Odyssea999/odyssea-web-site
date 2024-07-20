import {Directive, ElementRef, HostListener} from "@angular/core";

@Directive({
  standalone: true,
  selector: '[stdLandingCard]'
})
export class LandingCardDirective {

  private readonly classToTarget: string = ".std-landing-3-section-card-content";
  private elementRef: ElementRef;

  constructor(private readonly el: ElementRef) {
    this.elementRef = el;
  }

  @HostListener('click') onClick() {

    // As we need to expand only one card content at a time
    // we get all card with " show " class
    // This will return an array of node Element, and we will need to remove only the first ( [0] ) element's ' show ' class
    const cardWithShow = document.querySelectorAll(`${this.classToTarget}.show`);

    const cardContent = this.elementRef.nativeElement.querySelector(this.classToTarget);

    // If card is already expanded, and we click on it again
    // We then close the expanded card by removing the ' show ' class
    if (cardContent.classList.contains('show')) {
      cardContent.classList.remove('show');
    } else {
      if (cardContent) {

        // Check if we already have a card expanded
        if (cardWithShow.length > 0) {
          // Remove the ' show ' class, thus it no more expanded
          // this way we will always have 1 element expanded
          cardWithShow[0].classList.remove('show');
        }
        // Add class to expand card content
        cardContent.classList.add("show")
      }
    }

  }

}
