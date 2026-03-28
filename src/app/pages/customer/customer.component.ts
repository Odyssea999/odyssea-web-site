import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { firstValueFrom, forkJoin } from "rxjs";
import { SvgComponent } from "../../shared/components/svg/svg.component";
import { StepperComponent } from "../../shared/components/stepper/stepper.component";
import { StepperCountTracker } from "../../shared/components/stepper/components/stepper-count-tracker/stepper-count-tracker.component";
import { SeoService } from "../../shared/services/seo/seo.service";

type Option = {
  labelKey: string;
  value: string;
};

type CustomerStep = {
  id: number;
  titleKey: string;
  subtitleKey: string;
  fields: string[];
};

@Component({
  selector: 'od-customer',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterLink,
    SvgComponent,
    StepperComponent,
    StepperCountTracker
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

  readonly totalSteps = 7;
  currentStep = 1;
  isSubmitted = false;
  isSending = false;
  submissionError = '';

  readonly steps: CustomerStep[] = [
    {
      id: 1,
      titleKey: 'PAGES.customer.steps.1.title',
      subtitleKey: 'PAGES.customer.steps.1.subtitle',
      fields: ['firstName', 'lastName', 'workEmail', 'phone']
    },
    {
      id: 2,
      titleKey: 'PAGES.customer.steps.2.title',
      subtitleKey: 'PAGES.customer.steps.2.subtitle',
      fields: ['institutionName', 'institutionType', 'country', 'city']
    },
    {
      id: 3,
      titleKey: 'PAGES.customer.steps.3.title',
      subtitleKey: 'PAGES.customer.steps.3.subtitle',
      fields: ['studentsRange', 'staffRange']
    },
    {
      id: 4,
      titleKey: 'PAGES.customer.steps.4.title',
      subtitleKey: 'PAGES.customer.steps.4.subtitle',
      fields: ['needs']
    },
    {
      id: 5,
      titleKey: 'PAGES.customer.steps.5.title',
      subtitleKey: 'PAGES.customer.steps.5.subtitle',
      fields: ['timeline', 'priority']
    },
    {
      id: 6,
      titleKey: 'PAGES.customer.steps.6.title',
      subtitleKey: 'PAGES.customer.steps.6.subtitle',
      fields: ['demoFormat', 'preferredContact']
    },
    {
      id: 7,
      titleKey: 'PAGES.customer.steps.7.title',
      subtitleKey: 'PAGES.customer.steps.7.subtitle',
      fields: ['comments', 'acceptTerms']
    }
  ];

  readonly institutionTypes: Option[] = [
    { value: 'middle-school', labelKey: 'PAGES.customer.options.institutionTypes.middleSchool' },
    { value: 'high-school', labelKey: 'PAGES.customer.options.institutionTypes.highSchool' },
    { value: 'cfa', labelKey: 'PAGES.customer.options.institutionTypes.cfa' },
    { value: 'university', labelKey: 'PAGES.customer.options.institutionTypes.university' },
    { value: 'training-center', labelKey: 'PAGES.customer.options.institutionTypes.trainingCenter' }
  ];

  readonly sizeRanges: Option[] = [
    { value: '1-49', labelKey: 'PAGES.customer.options.sizeRanges.1' },
    { value: '50-149', labelKey: 'PAGES.customer.options.sizeRanges.2' },
    { value: '150-299', labelKey: 'PAGES.customer.options.sizeRanges.3' },
    { value: '300-549', labelKey: 'PAGES.customer.options.sizeRanges.4' },
    { value: '550+', labelKey: 'PAGES.customer.options.sizeRanges.5' }
  ];

  readonly needsOptions: Option[] = [
    { value: 'ged', labelKey: 'PAGES.customer.options.needs.ged' },
    { value: 'planning', labelKey: 'PAGES.customer.options.needs.planning' },
    { value: 'tracking', labelKey: 'PAGES.customer.options.needs.tracking' },
    { value: 'communication', labelKey: 'PAGES.customer.options.needs.communication' },
    { value: 'billing', labelKey: 'PAGES.customer.options.needs.billing' }
  ];

  readonly timelineOptions: Option[] = [
    { value: 'immediate', labelKey: 'PAGES.customer.options.timeline.immediate' },
    { value: 'one-month', labelKey: 'PAGES.customer.options.timeline.oneMonth' },
    { value: 'quarter', labelKey: 'PAGES.customer.options.timeline.quarter' },
    { value: 'exploratory', labelKey: 'PAGES.customer.options.timeline.exploratory' }
  ];

  readonly priorityOptions: Option[] = [
    { value: 'centralize', labelKey: 'PAGES.customer.options.priority.centralize' },
    { value: 'save-time', labelKey: 'PAGES.customer.options.priority.saveTime' },
    { value: 'improve-tracking', labelKey: 'PAGES.customer.options.priority.improveTracking' },
    { value: 'improve-communication', labelKey: 'PAGES.customer.options.priority.improveCommunication' }
  ];

  readonly demoFormatOptions: Option[] = [
    { value: 'video', labelKey: 'PAGES.customer.options.demoFormat.video' },
    { value: 'phone', labelKey: 'PAGES.customer.options.demoFormat.phone' },
    { value: 'onsite', labelKey: 'PAGES.customer.options.demoFormat.onsite' }
  ];

  readonly contactOptions: Option[] = [
    { value: 'email', labelKey: 'PAGES.customer.options.contact.email' },
    { value: 'phone', labelKey: 'PAGES.customer.options.contact.phone' },
    { value: 'either', labelKey: 'PAGES.customer.options.contact.either' }
  ];

  readonly customerForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    workEmail: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    institutionName: ['', Validators.required],
    institutionType: ['', Validators.required],
    country: ['', Validators.required],
    city: ['', Validators.required],
    studentsRange: ['', Validators.required],
    staffRange: ['', Validators.required],
    needs: [<string[]>[], Validators.required],
    timeline: ['', Validators.required],
    priority: ['', Validators.required],
    demoFormat: ['', Validators.required],
    preferredContact: ['', Validators.required],
    comments: [''],
    acceptTerms: [false, Validators.requiredTrue]
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly http: HttpClient,
    private readonly seoService: SeoService,
    private readonly translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.initSeoWithTranslations();
  }

  get currentStepConfig(): CustomerStep {
    return this.steps[this.currentStep - 1];
  }

  get progressWidth(): string {
    return `${(this.currentStep / this.totalSteps) * 100}%`;
  }

  get selectedNeeds(): string[] {
    return this.customerForm.controls.needs.value ?? [];
  }

  nextStep(): void {
    if (!this.isCurrentStepValid()) {
      this.markCurrentStepAsTouched();
      return;
    }

    if (this.currentStep < this.totalSteps) {
      this.currentStep += 1;
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep -= 1;
    }
  }

  async submit(): Promise<void> {
    if (!this.isCurrentStepValid() || this.customerForm.invalid) {
      this.customerForm.markAllAsTouched();
      return;
    }

    this.isSending = true;
    this.submissionError = '';

    try {
      await firstValueFrom(this.http.post('/api/become-customer', {
        ...this.customerForm.getRawValue(),
        comments: this.customerForm.value.comments || ''
      }));

      this.isSubmitted = true;
    } catch (error) {
      this.submissionError = 'PAGES.customer.errors.submit';
    } finally {
      this.isSending = false;
    }
  }

  isCurrentStepValid(): boolean {
    return this.currentStepConfig.fields.every((fieldName) => {
      const control = this.customerForm.get(fieldName);
      return !!control && control.valid;
    });
  }

  isStepCompleted(step: number): boolean {
    const config = this.steps[step - 1];
    return config.fields.every((fieldName) => {
      const control = this.customerForm.get(fieldName);
      return !!control && control.valid;
    });
  }

  toggleNeed(value: string): void {
    const currentNeeds = this.selectedNeeds;
    const updatedNeeds = currentNeeds.includes(value)
      ? currentNeeds.filter((item) => item !== value)
      : [...currentNeeds, value];

    this.customerForm.controls.needs.setValue(updatedNeeds);
    this.customerForm.controls.needs.markAsTouched();
    this.customerForm.controls.needs.updateValueAndValidity();
  }

  isNeedSelected(value: string): boolean {
    return this.selectedNeeds.includes(value);
  }

  controlHasError(controlName: string): boolean {
    const control = this.customerForm.get(controlName);
    return !!control && control.invalid && control.touched;
  }

  private markCurrentStepAsTouched(): void {
    this.currentStepConfig.fields.forEach((fieldName) => {
      this.customerForm.get(fieldName)?.markAsTouched();
    });
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
      url: 'https://odyssea-web-site-jiik.vercel.app/become-customer',
      type: 'website',
      image: '/images/og-image.png',
      title
    });
  }
}
