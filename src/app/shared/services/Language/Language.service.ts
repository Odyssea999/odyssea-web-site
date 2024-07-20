import {Injectable, signal, WritableSignal} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";

@Injectable()
export class LanguageService {

  language: WritableSignal<string> = signal("fr");

  constructor(private readonly translateService: TranslateService) {
    this.translateService.setDefaultLang(this.language());
    this.translateService.use(this.language());
  }
}
