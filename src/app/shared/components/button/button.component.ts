import {ChangeDetectionStrategy, Component, input, ViewEncapsulation} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {NgClass} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'std-button',
  standalone: true,
  imports: [
    TranslateModule,
    NgClass,
    RouterLink
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    "class": "btn-parent"
  }
})
export class ButtonComponent {

  /**
   * Button label content
   */
  content = input<string>()
  /**
   * Link to navigate to
   */
  navigateTo = input<string>();
  /**
   * If specified, btn as outlined style, otherwise it filled
   */
  outlined = input<boolean>(false);
  /**
   * Button background color
   * TO IMPLEMENT
   */
  bgColor = input<string>();

  constructor() {}

  setClassesStyle(): Record<string, string | boolean> {
    return {
      "btn": true,
      "btn-outlined": this.outlined(),
      "btn-filled": !this.outlined(),
    }
  }

}
