import {Component, OnInit} from '@angular/core';
import {SeoService} from "../../shared/services/seo/seo.service";
import {TranslateModule} from "@ngx-translate/core";
import {NavbarComponent} from "../../shared/components/navbar/navbar.component";
import {ButtonComponent} from "../../shared/components/button/button.component";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {LandingCardComponent} from "./components/landing-card/landing-card.component";
import {LandingCard} from "./type/type";
import {SvgComponent} from "../../shared/components/svg/svg.component";
import {BannerComponent} from "../../shared/components/banner/banner.component";

@Component({
  selector: 'std-landing',
  standalone: true,
  imports: [
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
export class LandingComponent implements OnInit {

  private readonly title: string = "{{ 'HOME.mainSection3.cards.item1.title' | translate }}";
  private readonly description: string = "ma description"

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
  ]

  imgSrc: string;

  constructor(private readonly seoService: SeoService) {
    this.handleSeoMetaTags();
    this.imgSrc = this.landingCardData[0].imgSrc;
  }

  ngOnInit(): void {

  }

  updateImgOnLandingCardSelected(imgPath: string): void {
    this.imgSrc = imgPath;
  }

  private handleSeoMetaTags(): void {
    this.seoService.setMetaTitle(this.title);
    this.seoService.setMetaDescription(this.description);

    this.seoService.setTwitterMetaTags({
      image: 'nada',
      title: this.title,
      description: this.description,
      card: 'summary_large_image',
      creator: 'Student check'
    });

    this.seoService.setFacebookMetaTags({
      url: 'https://localhost:62841',
      type: 'website',
      image: 'path or url image here',
      title: this.title
    })
  }

}
