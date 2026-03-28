import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { BannerComponent } from "../../shared/components/banner/banner.component";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { SeoService } from "../../shared/services/seo/seo.service";
import { forkJoin } from "rxjs";

@Component({
  selector: 'od-faq',
  standalone: true,
  imports: [
    TranslateModule,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    ButtonComponent
  ],
  providers: [SeoService],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent implements OnInit {
  private readonly seoKeys = {
    title: 'PAGES.faq.seo.title',
    description: 'PAGES.faq.seo.description'
  };
  readonly faqItems = [
    {
      question: 'PAGES.faq.items.1.question',
      answer: 'PAGES.faq.items.1.answer'
    },
    {
      question: 'PAGES.faq.items.2.question',
      answer: 'PAGES.faq.items.2.answer'
    },
    {
      question: 'PAGES.faq.items.3.question',
      answer: 'PAGES.faq.items.3.answer'
    },
    {
      question: 'PAGES.faq.items.4.question',
      answer: 'PAGES.faq.items.4.answer'
    },
    {
      question: 'PAGES.faq.items.5.question',
      answer: 'PAGES.faq.items.5.answer'
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
      url: 'https://odyssea-web-site.vercel.app/faq',
      type: 'website',
      image: '/images/og-image.png',
      title
    });
  }
}
