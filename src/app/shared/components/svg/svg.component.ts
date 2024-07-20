import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  input,
  InputSignal,
  ViewEncapsulation
} from '@angular/core';
import {SvgService} from "../../services/svg/svg.service";

@Component({
  selector: 'std-svg',
  standalone: true,
  imports: [],
  providers: [SvgService],
  templateUrl: './svg.component.html',
  styleUrl: './svg.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    "class": "std-svg"
  }
})
export class SvgComponent {

  /**
   * SVG file path
   */
  path: InputSignal<string | undefined> = input<string>();
  width: InputSignal<string | undefined> = input<string>();
  height: InputSignal<string | undefined> = input<string>();

  constructor(private readonly el: ElementRef, private readonly svgService: SvgService)
  {
    effect(() => {
      const svgFilePath: string | undefined = this.path();
      const width: string | undefined = this.width();
      const height: string | undefined = this.height();

      if (svgFilePath !== undefined) {
        this.svgService.handleSvgFile(svgFilePath, el).finally(() => {
          this.getSVGAfterInit(height, width);
        });

      }
    });
  }

  getSVGAfterInit(height: string | undefined, width: string | undefined): void {
    const svg = this.el.nativeElement.querySelector("svg");

    if (svg !== undefined) {

      if (height !== undefined) {
        svg.style.height = height;
      }

      if (width !== undefined) {
        svg.style.width = width;
      }
    }
  }

}
