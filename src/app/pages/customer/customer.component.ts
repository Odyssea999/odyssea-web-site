import { Component } from '@angular/core';
import {SvgComponent} from "../../shared/components/svg/svg.component";
import {SelectComponent} from "../../shared/components/form/select/select.component";
import {ButtonComponent} from "../../shared/components/button/button.component";
import {TranslateModule} from "@ngx-translate/core";
import {RouterLink} from "@angular/router";
import {
  SelectOptionComponent
} from "../../shared/components/form/select/components/select-option/select-option.component";
import {
  SelectOptionGroupComponent
} from "../../shared/components/form/select/components/select-option-group/select-option-group.component";
import {InputComponent} from "../../shared/components/form/input/input.component";
import {StepperComponent} from "../../shared/components/stepper/stepper.component";
import {
  StepperCountTracker
} from "../../shared/components/stepper/components/stepper-count-tracker/stepper-count-tracker.component";

@Component({
  selector: 'std-customer',
  standalone: true,
  imports: [
    SvgComponent,
    SelectComponent,
    ButtonComponent,
    TranslateModule,
    RouterLink,
    SelectOptionGroupComponent,
    SelectOptionComponent,
    InputComponent,
    StepperComponent,
    StepperCountTracker
  ],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss',
})
export class CustomerComponent {

  isToto: boolean = false;
}
