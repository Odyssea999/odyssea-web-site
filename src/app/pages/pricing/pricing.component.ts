import {Component, effect} from '@angular/core';
import {NavbarComponent} from "../../shared/components/navbar/navbar.component";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {TranslateModule} from "@ngx-translate/core";
import {ButtonComponent} from "../../shared/components/button/button.component";
import {BannerComponent} from "../../shared/components/banner/banner.component";
import {SvgComponent} from "../../shared/components/svg/svg.component";
import {PricingCardComponent} from "./components/pricing-card/pricing-card.component";
import {PricingSlider} from "./type/pricing.type";
import {NgClass} from "@angular/common";
import {PricingService} from "./service/pricing.service";

@Component({
  selector: 'std-pricing',
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
  providers: [PricingService],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {

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

  constructor(private readonly priceService: PricingService) {}

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

}
