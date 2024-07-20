import {Directive, ElementRef, HostListener, input, InputSignal, output, OutputEmitterRef} from "@angular/core";

@Directive({
  selector: '[selectOptionDirective]',
  standalone: true
})
export class SelectOptionDirective {

  private readonly optionClassName: string = "std-option";

  closeOptionGroup: OutputEmitterRef<boolean> = output<boolean>();
  isOptionGroupClose: InputSignal<boolean> = input<boolean>(false);


  constructor(private readonly el: ElementRef) {
  }

  @HostListener('click', ['$event.target']) onClick(event: HTMLElement): void {

    const findOptionsSelected = this.el.nativeElement.querySelectorAll(`.${this.optionClassName}.selected`);
    const optionClicked = event;

    if (findOptionsSelected.length > 0) {
      findOptionsSelected[0].classList.remove('selected');
    }

    if (optionClicked.className === this.optionClassName) {
      optionClicked.classList.add('selected');
      this.setCloseOptionGroup();
    }
  }

  setCloseOptionGroup(): void {
    if (this.isOptionGroupClose()) {
      console.log("voir ici : ", this.isOptionGroupClose());
      this.closeOptionGroup.emit(false);
    }
  }

}
