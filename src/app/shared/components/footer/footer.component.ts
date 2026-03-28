import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { TranslateModule } from "@ngx-translate/core";
import { SvgComponent } from '../svg/svg.component';

@Component({
  selector: 'od-footer',
  standalone: true,
  imports: [
    ButtonComponent,
    TranslateModule,
    SvgComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
