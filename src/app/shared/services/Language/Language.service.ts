import {Injectable, signal, WritableSignal} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";

@Injectable()
export class LanguageService {
  private readonly storageKey = 'odyssea-language';
  private readonly availableLanguages = ['fr', 'en'];

  language: WritableSignal<string> = signal(this.getInitialLanguage());

  constructor(private readonly translateService: TranslateService) {
    this.translateService.setDefaultLang(this.language());
    this.translateService.use(this.language());
  }

  setLanguage(language: string): void {
    if (!this.availableLanguages.includes(language) || this.language() === language) {
      return;
    }

    this.language.set(language);
    this.translateService.use(language);

    if (typeof window !== 'undefined') {
      window.localStorage.setItem(this.storageKey, language);
    }
  }

  private getInitialLanguage(): string {
    if (typeof window === 'undefined') {
      return 'fr';
    }

    const savedLanguage = window.localStorage.getItem(this.storageKey);

    if (savedLanguage && this.availableLanguages.includes(savedLanguage)) {
      return savedLanguage;
    }

    return 'fr';
  }
}
