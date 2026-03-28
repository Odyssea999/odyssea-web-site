import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: '[stdInputDirective]',
  standalone: true,
})
export class InputDirective {

  private readonly inputWrapperDefaultClassName: string = "od-form-control-input";
  private readonly inputDefaultClassName: string = "od-form-input";
  private readonly focusClassName: string = "od-form-input-focus";

  constructor(private readonly el: ElementRef) { }

  @HostListener('click', ['$event.target']) onClick(event: HTMLElement): void {

    const element = event.classList;
    const inputWrapperElement: HTMLElement = this.el.nativeElement.querySelector(`.${this.inputWrapperDefaultClassName}`);

    if (element !== null) {
      if (element.contains(this.inputWrapperDefaultClassName) || element.contains(this.inputDefaultClassName)) {

        if (inputWrapperElement !== undefined) {

          if (inputWrapperElement.classList.contains(this.focusClassName)) {
            this.removeFocusClassName(inputWrapperElement);
          } else {
            inputWrapperElement.classList.add(this.focusClassName);
          }
        }
      }
    }

  }

  private removeFocusClassName(inputWrapperElement: HTMLElement): void {
    if (inputWrapperElement.classList.contains(this.focusClassName)) {
      inputWrapperElement.classList.remove(this.focusClassName);
    }
  }

}
