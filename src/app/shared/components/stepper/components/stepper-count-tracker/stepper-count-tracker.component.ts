import {Component, input, InputSignal} from "@angular/core";


@Component({
  selector: 'std-stepper-count-tracker',
  templateUrl: './stepper-count-tracker.component.html',
  styleUrl: './stepper-count-tracker.component.scss',
  standalone: true
})
export class StepperCountTracker {
  initialValue: InputSignal<number | undefined> = input();
  totalSteps: InputSignal<number | undefined> = input();
}
