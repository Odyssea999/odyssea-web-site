import {Component, input, InputSignal} from "@angular/core";
import {FormGroup} from "@angular/forms";


@Component({
  selector: 'std-stepper-step',
  templateUrl: './stepper-step.component.html',
  styleUrl: './stepper-step.component.scss',
  standalone: true
})
export class StepperStepComponent {
  stepControl: InputSignal<FormGroup | undefined> = input();
}
