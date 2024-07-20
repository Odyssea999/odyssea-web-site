import {
  ChangeDetectionStrategy,
  Component, effect, ElementRef,
  input,
  InputSignal,
  ViewEncapsulation
} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {NgClass} from "@angular/common";
import {LandingCardDirective} from "../directives/landing-card.directive";
import {SvgComponent} from "../../../../shared/components/svg/svg.component";

@Component({
  selector: 'std-landing-card',
  standalone: true,
  imports: [
    TranslateModule,
    NgClass,
    LandingCardDirective,
    SvgComponent,
  ],
  templateUrl: './landing-card.component.html',
  styleUrl: './landing-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class LandingCardComponent {
  title: InputSignal<string | undefined> = input<string>();
  content: InputSignal<string | undefined> = input<string>();
  svg: InputSignal<string | undefined> = input<string>();

  constructor(private readonly el: ElementRef) {}
}
