import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { BannerComponent } from "../../shared/components/banner/banner.component";
import { SvgComponent } from "../../shared/components/svg/svg.component";
import { PricingCardComponent } from "./components/pricing-card/pricing-card.component";
import { PricingSlider } from "./type/pricing.type";
import { NgClass } from "@angular/common";
import { PricingService } from "./service/pricing.service";
import { SeoService } from "../../shared/services/seo/seo.service";
import { forkJoin } from "rxjs";

@Component({
  selector: 'od-pricing',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    TranslateModule,
    ButtonComponent,
    BannerComponent,
    SvgComponent,
    PricingCardComponent,
    NgClass
  ],
  providers: [PricingService, SeoService],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent implements OnInit {
  private readonly seoKeys = {
    title: 'PAGES.pricing.seo.title',
    description: 'PAGES.pricing.seo.description'
  };

  pricingSlider: Array<PricingSlider> = [
    {
      value: 49,
      isSelected: true,
      between: '10-49'
    },
    {
      value: 50,
      isSelected: false,
      between: "50-149"
    },
    {
      value: 150,
      isSelected: false,
      between: "150-249"
    },
    {
      value: 250,
      isSelected: false,
      between: "250-349"
    },
    {
      value: 350,
      isSelected: false,
      between: "350-449"
    },
    {
      value: 450,
      isSelected: false,
      between: "450-499"
    },
    {
      value: 500,
      isSelected: false,
      between: "500-549"
    },
    {
      value: 550,
      isSelected: false,
      between: "550+"
    },
  ]

  constructor(
    private readonly priceService: PricingService,
    private readonly seoService: SeoService,
    private readonly translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.initSeoWithTranslations();
  }

  sliderSelected(index: number, slider: PricingSlider): void {
    this.priceService.setStudentNumber(slider.value);
    this.getValueIndexUnderCurrent(index, slider);
  }

  getValueIndexUnderCurrent(index: number, slider: PricingSlider): void {
    const slidersEqualOrLower = this.pricingSlider.filter(obj => obj.value <= slider.value);
    const slidersEqualOrUpper = this.pricingSlider.filter(obj => obj.value >= slider.value);

    this.setSliderSelected(slidersEqualOrLower, true);
    this.setSliderSelected(slidersEqualOrUpper, false);
  }

  setSliderSelected(sliders: Array<PricingSlider>, isSelected: boolean): void {
    sliders.forEach((obj, index) => {
      if (index > 0) {
        obj.isSelected = isSelected;
      }
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
      url: 'https://odyssea-web-site-jiik.vercel.app/pricing',
      type: 'website',
      image: '/images/og-image.png',
      title
    });
  }

}
