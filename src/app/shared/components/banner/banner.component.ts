import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'od-banner',
  standalone: true,
  imports: [
    ButtonComponent,
    TranslateModule
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

}
