import { Component, OnDestroy, OnInit } from '@angular/core';
import { SeoService } from "../../shared/services/seo/seo.service";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { LandingCardComponent } from "./components/landing-card/landing-card.component";
import { LandingCard } from "./type/type";
import { SvgComponent } from "../../shared/components/svg/svg.component";
import { BannerComponent } from "../../shared/components/banner/banner.component";
import { CommonModule } from '@angular/common';
import { forkJoin, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'od-landing',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    NavbarComponent,
    ButtonComponent,
    FooterComponent,
    LandingCardComponent,
    SvgComponent,
    BannerComponent
  ],
  providers: [SeoService],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  private readonly SEO_KEYS = {
    title: 'HOME.mainSection3.cards.item1.title',
    description: 'HOME.mainSection3.cards.item1.content'
  };

  landingCardData: Array<LandingCard> = [
    {
      title: 'HOME.mainSection3.cards.item1.title',
      content: 'HOME.mainSection3.cards.item1.content',
      imgSrc: '/images/promotion_migration.png',
      svgIcon: "/icons/change.svg"
    },
    {
      title: 'HOME.mainSection3.cards.item2.title',
      content: 'HOME.mainSection3.cards.item2.content',
      imgSrc: '/images/landing_activity.png',
      svgIcon: "/icons/tracking_activity.svg"
    }
  ];

  imgSrc: string;

  constructor(
    private readonly seoService: SeoService,
    private readonly translate: TranslateService
  ) {
    this.imgSrc = this.landingCardData[0].imgSrc;
  }

  ngOnInit(): void {
    this.initSeoWithTranslations();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  updateImgOnLandingCardSelected(imgPath: string): void {
    this.imgSrc = imgPath;
  }

  private initSeoWithTranslations(): void {
    forkJoin({
      title: this.translate.get(this.SEO_KEYS.title),
      description: this.translate.get(this.SEO_KEYS.description)
    })
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ title, description }) => {
        this.applySeo(title, description);
      });
  }

  private applySeo(title: string, description: string): void {
    this.seoService.setMetaTitle(title);
    this.seoService.setMetaDescription(description);

    this.seoService.setTwitterMetaTags({
      image: '/images/og-image.png',
      title: title,
      description: description,
      card: 'summary_large_image',
      creator: 'Odyssea'
    });

    this.seoService.setFacebookMetaTags({
      url: 'https://odyssea-web-site-jiik.vercel.app',
      type: 'website',
      image: '/images/og-image.png',
      title: title
    });
  }
}
