import {Component, effect, input, InputSignal} from '@angular/core';
import {SvgComponent} from "../../svg/svg.component";
import {SelectOptionGroupComponent} from "./components/select-option-group/select-option-group.component";
import {SelectOptionComponent} from "./components/select-option/select-option.component";
import {NgClass} from "@angular/common";
import {SelectOptionDirective} from "./directives/select-option.directive";

@Component({
  selector: 'std-select',
  standalone: true,
  imports: [
    SvgComponent,
    SelectOptionGroupComponent,
    SelectOptionComponent,
    NgClass,
    SelectOptionDirective
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {

  label: InputSignal<string | undefined> = input<string>();
  defaultOption: InputSignal<string | undefined> = input<string>();

  isOpen: boolean = false;

  constructor() {}

  openSelect(): void {
    this.isOpen = !this.isOpen;
  }
}
