import { Component } from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'std-footer',
  standalone: true,
  imports: [
    ButtonComponent,
    TranslateModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
