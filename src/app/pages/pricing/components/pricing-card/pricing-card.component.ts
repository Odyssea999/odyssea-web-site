import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  input,
  InputSignal,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {ButtonComponent} from "../../../../shared/components/button/button.component";
import {SvgComponent} from "../../../../shared/components/svg/svg.component";
import {TranslateModule} from "@ngx-translate/core";
import {NgClass} from "@angular/common";
import {Establishment, Languages, PricingEstablishment, PricingFeatureOption} from "../../type/pricing.type";
import {PricingService} from "../../service/pricing.service";
import {Subscription} from "rxjs";
import {EstablishmentTypes, features} from "../../const/pricing.const";
import {LanguageService} from "../../../../shared/services/Language/Language.service";

@Component({
  selector: 'std-pricing-card',
  standalone: true,
  imports: [
    ButtonComponent,
    SvgComponent,
    TranslateModule,
    NgClass
  ],
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.scss',
})
export class PricingCardComponent implements OnInit, OnDestroy {

  bestSeller: InputSignal<boolean> = input<boolean>(false);
  isBestsellerSet = false;

  features = features;

  optionalFeatures: Array<PricingFeatureOption<number>> = [
    {
      title: 'Cours visio',
      price: 99,
      isSelected: false,
      id: 99
    },
    {
      title: 'Gestion des candidatures',
      price: 50,
      isSelected: false,
      id: 99
    }
  ]
  establishment: Record<Establishment, PricingEstablishment<number>>;
  selectedEstablishment: string | undefined;

  studentNumber: number = 49

  /// BEST SELLER
  bestSellerPrice: number = 0;

  /// NORMAL
  totalPrice: number = 0;

  /// SUBSCRIPTIONS
  onPriceChange: Subscription | undefined;

  constructor(private readonly el: ElementRef, private pricingService: PricingService, private readonly languageService: LanguageService) {
    if (this.languageService.language() == "fr") {
      this.establishment = EstablishmentTypes.fr;
    } else {
      this.establishment = EstablishmentTypes.en;
    }
  }

  ngOnInit(): void {
    this._onInitialize();
  }

  ngOnDestroy(): void {
    this._dispose();
  }

  toto(): void {
    this.pricingService.$studentNumber.subscribe((titi) => {
      this.studentNumber = titi;
    })
  }

  handleCheck(): void {
    const element = this.el.nativeElement.querySelector(".std-pricing-option-check");

    if (element !== undefined) {
      if (element.classList.length > 1) {
        element.classList.remove("checked");
      } else {
        element.classList.add("checked");
      }
    }
  }

  toggleEstablishmentList(): void {
    const element = this.el.nativeElement.querySelector(".std-pricing-establishment-list");

    console.log(element)
    if (element !== undefined) {
      if (element.classList.length > 1) {
        element.classList.remove("show");
      } else {
        element.classList.add("show");
      }
    }
  }

  pricing(): void {
    this.onPriceChange = this.pricingService.$totalPrice.subscribe((prices) => {
      this.totalPrice = prices.normalPrice;
      this.bestSellerPrice = prices.bestSellerPrice;
    });
  }

  selectEstablishment(type: Establishment | undefined): void {
    if (type == undefined) {
      this.features = features;
      this.selectedEstablishment = "PRICING.cards.establishment";
    } else {
      this.selectedEstablishment = this.establishment[type].title;
      this.features = features.filter((v) => v.type.includes(type));
    }
  }

  private _onInitialize(): void {
    this.toto();
    this.pricingService.totalPrice(this.optionalFeatures);
    this.pricing();
  }

  private _dispose(): void {
    if (typeof this.onPriceChange !== "undefined") {
      this.onPriceChange.unsubscribe();
      this.onPriceChange = undefined;
    }
  }

}
