import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { BannerComponent } from "../../shared/components/banner/banner.component";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { SeoService } from "../../shared/services/seo/seo.service";
import { forkJoin } from "rxjs";

@Component({
  selector: 'od-about',
  standalone: true,
  imports: [
    TranslateModule,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    ButtonComponent
  ],
  providers: [SeoService],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  private readonly seoKeys = {
    title: 'PAGES.about.seo.title',
    description: 'PAGES.about.seo.description'
  };
  readonly values = [
    {
      title: 'PAGES.about.values.clarity.title',
      content: 'PAGES.about.values.clarity.content'
    },
    {
      title: 'PAGES.about.values.proximity.title',
      content: 'PAGES.about.values.proximity.content'
    },
    {
      title: 'PAGES.about.values.sustainability.title',
      content: 'PAGES.about.values.sustainability.content'
    }
  ];

  constructor(
    private readonly seoService: SeoService,
    private readonly translate: TranslateService
  ) { }

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
      url: 'https://odyssea-web-site-jiik.vercel.app/about',
      type: 'website',
      image: '/images/og-image.png',
      title
    });
  }
}
