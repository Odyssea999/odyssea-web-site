import {PricingFeatureOption} from "../type/pricing.type";

export interface IPricingInterface {
  /**
   * Handle bestseller offer price
   * @param studentNumber
   * @param optionalFeatures
   */
  bestSellerPricing(studentNumber: number, optionalFeatures: Array<PricingFeatureOption<number>>): number;
  /**
   * Handle normal offer price
   * @param studentNumber
   * @param optionalFeatures
   */
  normalPricing(studentNumber: number, optionalFeatures: Array<PricingFeatureOption<number>>): number;
  /**
   * Calculate offer options price
   */
  pricingOptionalCalculate(optionalFeatures: Array<PricingFeatureOption<number>>): number;
  /**
   * Return total price
   *
   * @param optionalFeatures
   */
  totalPrice(optionalFeatures: Array<PricingFeatureOption<number>>): void;
}

const IPricingInterface = Symbol("IPricingInterface");
