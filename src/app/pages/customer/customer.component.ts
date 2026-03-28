import { Component, OnInit } from '@angular/core';
import { SvgComponent } from "../../shared/components/svg/svg.component";
import { SelectComponent } from "../../shared/components/form/select/select.component";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { RouterLink } from "@angular/router";
import {
  SelectOptionComponent
} from "../../shared/components/form/select/components/select-option/select-option.component";
import {
  SelectOptionGroupComponent
} from "../../shared/components/form/select/components/select-option-group/select-option-group.component";
import { InputComponent } from "../../shared/components/form/input/input.component";
import { StepperComponent } from "../../shared/components/stepper/stepper.component";
import {
  StepperCountTracker
} from "../../shared/components/stepper/components/stepper-count-tracker/stepper-count-tracker.component";
import { StaffInformationComponent } from "./components/forms/staff-information/staff-information.component";
import { SchoolInformationComponent } from "./components/forms/school-information/school-information.component";
import { SeoService } from "../../shared/services/seo/seo.service";
import { forkJoin } from "rxjs";

@Component({
  selector: 'od-customer',
  standalone: true,
  imports: [
    SvgComponent,
    SelectComponent,
    ButtonComponent,
    TranslateModule,
    RouterLink,
    SelectOptionGroupComponent,
    SelectOptionComponent,
    InputComponent,
    StepperComponent,
    StepperCountTracker,
    StaffInformationComponent,
    SchoolInformationComponent
  ],
  providers: [SeoService],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss',
})
export class CustomerComponent implements OnInit {
  private readonly seoKeys = {
    title: 'PAGES.customer.seo.title',
    description: 'PAGES.customer.seo.description'
  };

  isToto: boolean = false;

  constructor(
    private readonly seoService: SeoService,
    private readonly translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.initSeoWithTranslations();
  }

  private initSeoWithTranslations(): void {
    forkJoin({
      title: this.translate.get(this.seoKeys.title),
      description: this.translate.get(this.seoKeys.description)
    }).subscribe(({ title, description }) => {
      this.applySeo(title, description);
    });
  }

  private applySeo(title: string, description: string): void {
    this.seoService.setMetaTitle(title);
    this.seoService.setMetaDescription(description);
    this.seoService.setTwitterMetaTags({
      image: '/images/og-image.png',
      title,
      description,
      card: 'summary_large_image',
      creator: 'Odyssea'
    });
    this.seoService.setFacebookMetaTags({
      url: 'https://odyssea-web-site.vercel.app/become-customer',
      type: 'website',
      image: '/images/og-image.png',
      title
    });
  }
}
