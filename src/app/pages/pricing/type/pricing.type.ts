
export type PricingEstablishment<T> = {
  title: string;
  id: T;
  isSelected: boolean
}

export type PricingFeatureOption<T = null> = {
  title: string;
  id: T;
  isSelected: boolean;
  price: number;
}

export type PricingSlider = {
  isSelected: boolean;
  value: number;
  between: string;
}

export type TotalPrice = {
  normalPrice: number,
  bestSellerPrice: number,
}

export type Languages = "en" | "fr";
export type Establishment = "highSchool" | "middleSchool" | "university" | "universityApprenticeship" | "highSchoolApprenticeship"

export type PricingFeature<TLanguage, TType> = {
  title: string;
  description: string;
  isPremium: boolean;
  type: Array<TType>
}

/*
"Middle school" | "High school" | "University"
 */
