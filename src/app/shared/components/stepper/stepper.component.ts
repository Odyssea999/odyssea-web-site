import { Component, computed, input, InputSignal } from "@angular/core";
import { NgClass } from "@angular/common";

type StepperModel = "normal" | "percentage";
type StepperOrientation = "horizontal" | "vertical";

@Component({
  selector: "od-stepper",
  templateUrl: "./stepper.component.html",
  styleUrl: "./stepper.component.scss",
  standalone: true,
  imports: [
    NgClass
  ]
})
export class StepperComponent {
  initialStep: InputSignal<number> = input(1);
  totalSteps: InputSignal<number | undefined> = input();
  type: InputSignal<StepperModel> = input<StepperModel>("normal");
  orientation: InputSignal<StepperOrientation> = input<StepperOrientation>("horizontal");

  readonly steps = computed(() => {
    const totalSteps = this.totalSteps() ?? 0;
    return Array.from({ length: totalSteps }, (_, index) => index + 1);
  });

  isCompleted(step: number): boolean {
    return step < this.initialStep();
  }

  isActive(step: number): boolean {
    return step === this.initialStep();
  }
}
