import {Component, input, InputSignal, TemplateRef} from "@angular/core";
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: "std-stepper-header",
  standalone: true,
  templateUrl: "./stepper-header.component.html",
  imports: [
    NgTemplateOutlet
  ],
  styleUrl: "./stepper-header.component.scss"
})
export class StepperHeaderComponent {

  template: InputSignal<TemplateRef<any> | undefined> = input();
  active: InputSignal<boolean | undefined> = input();
  disabled: InputSignal<boolean | undefined> = input();
  index: InputSignal<string | undefined> = input();
  id: InputSignal<string | undefined> = input();
}
