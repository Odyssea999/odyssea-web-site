import { Component, ElementRef, input, InputSignal, TemplateRef } from "@angular/core";
import { StepperHeaderComponent } from "./components/stepper-header/stepper-header.component";
import { Nullable, Undefined } from "../../ts-helpers/ts-helpers";

type StepperModel = "normal" | "percentage"
type StepperOrientation = "horizontal" | "vertical";

@Component({
  selector: "od-stepper",
  templateUrl: "./stepper.component.html",
  styleUrl: "./stepper.component.scss",
  standalone: true,
  imports: [
    StepperHeaderComponent
  ]
})
export class StepperComponent {

  initialStep: InputSignal<number> = input(1);
  totalSteps: InputSignal<Undefined<number>> = input();
  type: InputSignal<StepperModel> = input<StepperModel>("normal");
  orientation: InputSignal<StepperOrientation> = input<StepperOrientation>("horizontal");

  headerTemplate: Nullable<TemplateRef<any>>;

  constructor(private readonly el: ElementRef) { }


}
