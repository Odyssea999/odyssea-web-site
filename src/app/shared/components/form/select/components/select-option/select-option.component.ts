import { Component, input, InputSignal, OnInit, output } from "@angular/core";
import { NgClass } from "@angular/common";

@Component({
  selector: "od-select-option, [od-select-option], [stdSelectOption]",
  standalone: true,
  templateUrl: "./select-option.component.html",
  styleUrls: ["./select-option.component.scss"],
  imports: [
    NgClass,
  ],
  host: {
    "class": "od-option",
  }
})
export class SelectOptionComponent implements OnInit {

  selected: boolean = false
  label: InputSignal<string | undefined> = input<string | undefined>();
  valueInput: InputSignal<unknown> = input<unknown>();

  valueOutput = output<unknown>();

  constructor() { }

  ngOnInit(): void {
    this.valueOutput.emit(this.valueInput());
  }

  setSelected(): Record<string, string | boolean> {
    return {
      "selected": this.selected
    }
  }

  selectOption(): void {
    this.selected = true
    //this.selectService.setClose(true);
  }
}
