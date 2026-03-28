import { Component, input, InputSignal, OnInit, output, OutputEmitterRef } from "@angular/core";
import { InputDirective } from "./directive/input.directive";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { NgClass } from "@angular/common";

@Component({
  selector: "od-input",
  templateUrl: "./input.component.html",
  styleUrl: "./input.component.scss",
  standalone: true,
  imports: [
    InputDirective,
    ReactiveFormsModule,
    NgClass
  ]
})
export class InputComponent implements OnInit {

  label: InputSignal<string | undefined> = input<string>();
  placeHolder: InputSignal<string | undefined> = input<string>();
  data: InputSignal<unknown> = input();
  dataOutput: OutputEmitterRef<unknown> = output();

  showError: InputSignal<boolean> = input<boolean>(false);
  errorMessage: InputSignal<string | undefined> = input<string>();

  constructor() { }

  ngOnInit(): void {
    this._init();
  }

  private setOutputData(): void {
    this.dataOutput.emit(this.data());
  }

  private _init(): void {
    this.setOutputData();
  }
}
