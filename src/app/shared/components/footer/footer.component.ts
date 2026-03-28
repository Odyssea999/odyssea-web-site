import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { TranslateModule } from "@ngx-translate/core";
import { SvgComponent } from '../svg/svg.component';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'od-footer',
  standalone: true,
  imports: [
    ButtonComponent,
    TranslateModule,
    SvgComponent,
    RouterLink
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
