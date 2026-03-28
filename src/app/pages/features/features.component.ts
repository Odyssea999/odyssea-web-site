import { Component, OnInit } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { BannerComponent } from "../../shared/components/banner/banner.component";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { SeoService } from "../../shared/services/seo/seo.service";
import { TranslateService } from "@ngx-translate/core";
import { forkJoin } from "rxjs";

@Component({
  selector: 'od-features',
  standalone: true,
  imports: [
    TranslateModule,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    ButtonComponent
  ],
  providers: [SeoService],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent implements OnInit {
  private readonly seoKeys = {
    title: 'PAGES.features.seo.title',
    description: 'PAGES.features.seo.description'
  };
  readonly featureGroups = [
    {
      title: 'PAGES.features.groups.ged.title',
      description: 'PAGES.features.groups.ged.description',
      items: [
        'PAGES.features.groups.ged.items.1',
        'PAGES.features.groups.ged.items.2',
        'PAGES.features.groups.ged.items.3'
      ]
    },
    {
      title: 'PAGES.features.groups.organization.title',
      description: 'PAGES.features.groups.organization.description',
      items: [
        'PAGES.features.groups.organization.items.1',
        'PAGES.features.groups.organization.items.2',
        'PAGES.features.groups.organization.items.3'
      ]
    },
    {
      title: 'PAGES.features.groups.tracking.title',
      description: 'PAGES.features.groups.tracking.description',
      items: [
        'PAGES.features.groups.tracking.items.1',
        'PAGES.features.groups.tracking.items.2',
        'PAGES.features.groups.tracking.items.3'
      ]
    },
    {
      title: 'PAGES.features.groups.communication.title',
      description: 'PAGES.features.groups.communication.description',
      items: [
        'PAGES.features.groups.communication.items.1',
        'PAGES.features.groups.communication.items.2',
        'PAGES.features.groups.communication.items.3'
      ]
    }
  ];

  readonly highlights = [
    'PAGES.features.highlights.1',
    'PAGES.features.highlights.2',
    'PAGES.features.highlights.3'
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
      url: 'https://odyssea-web-site.vercel.app/features',
      type: 'website',
      image: '/images/og-image.png',
      title
    });
  }
}
