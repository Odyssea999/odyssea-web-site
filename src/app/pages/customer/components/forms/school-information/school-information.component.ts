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
  selector: "std-school-information",
  templateUrl: "./school-information.component.html",
  styleUrls: ["./school-information.component.scss"],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [
    ButtonComponent,
    SelectComponent,
    SelectOptionComponent,
    SelectOptionGroupComponent
  ]
})
export class SchoolInformationComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

}
