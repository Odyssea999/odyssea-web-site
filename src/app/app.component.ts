import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";
import { LanguageService } from "./shared/services/Language/Language.service";

@Component({
  selector: 'od-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [LanguageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private readonly languageService: LanguageService) { }
}
