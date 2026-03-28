import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { BannerComponent } from "../../shared/components/banner/banner.component";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { SeoService } from "../../shared/services/seo/seo.service";
import { forkJoin } from "rxjs";

@Component({
  selector: 'od-how-it-works',
  standalone: true,
  imports: [
    TranslateModule,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    ButtonComponent
  ],
  providers: [SeoService],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss'
})
export class HowItWorksComponent implements OnInit {
  private readonly seoKeys = {
    title: 'PAGES.howItWorks.seo.title',
    description: 'PAGES.howItWorks.seo.description'
  };
  readonly steps = [
    {
      title: 'PAGES.howItWorks.steps.1.title',
      content: 'PAGES.howItWorks.steps.1.content'
    },
    {
      title: 'PAGES.howItWorks.steps.2.title',
      content: 'PAGES.howItWorks.steps.2.content'
    },
    {
      title: 'PAGES.howItWorks.steps.3.title',
      content: 'PAGES.howItWorks.steps.3.content'
    },
    {
      title: 'PAGES.howItWorks.steps.4.title',
      content: 'PAGES.howItWorks.steps.4.content'
    }
  ];

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
      url: 'https://odyssea-web-site.vercel.app/how-it-works',
      type: 'website',
      image: '/images/og-image.png',
      title
    });
  }
}
