import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from "@angular/core";
import {ButtonComponent} from "../../../../../shared/components/button/button.component";
import {SelectComponent} from "../../../../../shared/components/form/select/select.component";
import {
  SelectOptionComponent
} from "../../../../../shared/components/form/select/components/select-option/select-option.component";
import {
  SelectOptionGroupComponent
} from "../../../../../shared/components/form/select/components/select-option-group/select-option-group.component";

@Component({
  selector: "std-staff-information",
  templateUrl: "./staff-information.component.html",
  styleUrls: ["../../../customer.component.scss", "./staff-information.component.scss"],
  standalone: true,
  imports: [
    ButtonComponent,
    SelectComponent,
    SelectOptionComponent,
    SelectOptionGroupComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    "class": "std-staff-container"
  }
})
export class StaffInformationComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

}
