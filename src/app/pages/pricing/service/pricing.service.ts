import {Injectable, OnDestroy} from "@angular/core";
import {BehaviorSubject, Observable, Subject, Subscription} from "rxjs";
import {IPricingInterface} from "./pricing.interface";
import {PricingFeatureOption, TotalPrice} from "../type/pricing.type";


@Injectable()
export class PricingService implements IPricingInterface, OnDestroy {

  /// Maximum number that we can calculate and show a price
  /// Above this number, we will show a normal text
  /// That says the price should be on demand
  /// Thus we can adapt price on client needs
  defaultMaximumStudentNumber: number = 500;
  /// Each student cost 5 bucks
  defaultStudentPricing: number = 5;

  /// Percentage of discount to apply for yearly payment
  /// TODO : TO IMPLEMENT
  yearlySubscriptionDiscount: number = 15;

  /// BEST SELLER
  bestSellerPriceBonus: number = 0.75;

  /// NORMAL
  totalMonthly = 99;

  /// DISCOUNTS
  bestSellerDiscount: number = 5; // 5% discount
  collegeDiscount: number = 5;

  private studentNumber: BehaviorSubject<number> = new BehaviorSubject<number>(49);
  $studentNumber: Observable<number> = this.studentNumber.asObservable();

  private total: Subject<TotalPrice> = new Subject<TotalPrice>();
  $totalPrice: Observable<TotalPrice> = this.total.asObservable();

  private onStudentNumberChange: Subscription | undefined;

  setStudentNumber(value: number): void {
    this.studentNumber.next(value);
  }

  bestSellerPricing(studentNumber: number, optionalFeatures: Array<PricingFeatureOption<number>>): number {
    const total = this._pricingCalculate(studentNumber, optionalFeatures, true);

    const applyDiscount = (total * this.bestSellerDiscount) / 100;
    let totalAfterBestSellerDiscount = total - applyDiscount;

    if (studentNumber > this.defaultMaximumStudentNumber) {
      return totalAfterBestSellerDiscount;
    } else {
      return Math.round(total);
    }
  }

  normalPricing(studentNumber: number, optionalFeatures: Array<PricingFeatureOption<number>>): number {
    let total: number = this._pricingCalculate(studentNumber, optionalFeatures);
    return total;
  }

  pricingOptionalCalculate(optionalFeatures: Array<PricingFeatureOption<number>>): number {
    const price = optionalFeatures
      .filter((a) => a.isSelected)
      .reduce((a, b) => a + b.price, 0);
    return price;
  }

  totalPrice(optionalFeatures: Array<PricingFeatureOption<number>>): void {
    this.$studentNumber.subscribe((studentNumber) => {

      console.log("logging service student number : ", studentNumber)

      if (studentNumber <= this.defaultMaximumStudentNumber) {
        let normalPrice: number = this.normalPricing(studentNumber, optionalFeatures);
        let bestSellerPrice: number = this.bestSellerPricing(studentNumber, optionalFeatures);

        this.total.next({normalPrice: normalPrice, bestSellerPrice: bestSellerPrice})
      } else {
        let normalPrice: number = this.normalPricing(studentNumber, optionalFeatures);
        let bestSellerPrice: number = this.bestSellerPricing(studentNumber, optionalFeatures);

        this.total.next({normalPrice: normalPrice, bestSellerPrice: bestSellerPrice})
      }
    });
  }

  private _pricingCalculate(studentNumber: number, optionalFeatures: Array<PricingFeatureOption<number>>, isBestSeller: boolean = false): number {
    let total: number = 0;
    const studentPricing = isBestSeller ? this.defaultStudentPricing + this.bestSellerPriceBonus : this.defaultStudentPricing;

    for(let i = 0; i < studentNumber; i++) {
      total += studentPricing;
    }

    const optionalFeatureTotalPrice: number = this.pricingOptionalCalculate(optionalFeatures);
    if (optionalFeatureTotalPrice > 0) {
      total = total + optionalFeatureTotalPrice;
    }

    return total + this.totalMonthly;
  }

  private _dispose(): void {
    if (typeof this.onStudentNumberChange !== "undefined") {
      this.onStudentNumberChange.unsubscribe();
      this.onStudentNumberChange = undefined;
    }
  }

  ngOnDestroy(): void {
    this._dispose();
  }

}
