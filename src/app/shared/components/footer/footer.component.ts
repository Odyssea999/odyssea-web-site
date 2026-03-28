import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { TranslateModule } from "@ngx-translate/core";
import { SvgComponent } from '../svg/svg.component';
import { RouterLink } from "@angular/router";
import { NgClass } from "@angular/common";
import { LanguageService } from "../../services/Language/Language.service";

@Component({
  selector: 'od-footer',
  standalone: true,
  imports: [
    ButtonComponent,
    TranslateModule,
    SvgComponent,
    RouterLink,
    NgClass
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  isLanguageMenuOpened: boolean = false;

  readonly languages = [
    { key: 'fr', label: 'FR' },
    { key: 'en', label: 'EN' }
  ];

  constructor(readonly languageService: LanguageService) {}

  toggleLanguageMenu(): void {
    this.isLanguageMenuOpened = !this.isLanguageMenuOpened;
  }

  selectLanguage(language: string): void {
    this.languageService.setLanguage(language);
    this.isLanguageMenuOpened = false;
  }
}
