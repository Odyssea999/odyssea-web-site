import {
  Establishment,
  Languages,
  PricingEstablishment,
  PricingFeature,
  PricingFeatureOption
} from "../type/pricing.type";

export const EstablishmentTypes: Record<Languages, Record<Establishment, PricingEstablishment<number>>> = {
  fr: {
    middleSchool: {
      title: "Collège",
      id: 1,
      isSelected: false
    },
    highSchool: {
      title: "Lycée",
      id: 2,
      isSelected: false
    },
    highSchoolApprenticeship: {
      title: "Lycée et CFA",
      id: 3,
      isSelected: false
    },
    university: {
      title: "Université",
      id: 4,
      isSelected: false
    },
    universityApprenticeship: {
      title: "Université et CFA",
      id: 5,
      isSelected: false
    },
  },
  en: {
    middleSchool: {
      title: "Middle school",
      id: 1,
      isSelected: false
    },
    highSchool: {
      title: "High school",
      id: 2,
      isSelected: false
    },
    highSchoolApprenticeship: {
      title: "High school & apprenticeships",
      id: 3,
      isSelected: false
    },
    university: {
      title: "University",
      id: 4,
      isSelected: false
    },
    universityApprenticeship: {
      title: "University & apprenticeships",
      id: 5,
      isSelected: false
    },
  }
}

export const features: Array<PricingFeature<any, Establishment>> = [
  {
    title: "PRICING.cards.features.1.title",
    description: "PRICING.cards.features.1.description",
    isPremium: false,
    type: ["university", "middleSchool", "highSchool", "highSchoolApprenticeship", "universityApprenticeship"]
  },
  {
    title: "PRICING.cards.features.2.title",
    description: "PRICING.cards.features.2.description",
    isPremium: false,
    type: ["university", "middleSchool", "highSchool", "highSchoolApprenticeship", "universityApprenticeship"]
  },
  {
    title: "PRICING.cards.features.3.title",
    description: "PRICING.cards.features.3.description",
    isPremium: false,
    type: ["university", "middleSchool", "highSchool", "highSchoolApprenticeship", "universityApprenticeship"]
  },
  {
    title: "PRICING.cards.features.4.title",
    description: "PRICING.cards.features.4.description",
    isPremium: false,
    type: ["university", "middleSchool", "highSchool", "highSchoolApprenticeship", "universityApprenticeship"]
  },
  {
    title: "PRICING.cards.features.5.title",
    description: "PRICING.cards.features.5.description",
    isPremium: false,
    type: ["university", "middleSchool", "highSchool", "highSchoolApprenticeship", "universityApprenticeship"]
  },
  {
    title: "PRICING.cards.features.6.title",
    description: "PRICING.cards.features.6.description",
    isPremium: false,
    type: ["university", "middleSchool", "highSchool", "highSchoolApprenticeship", "universityApprenticeship"]
  },
  {
    title: "PRICING.cards.features.7.title",
    description: "PRICING.cards.features.7.description",
    isPremium: false,
    type: ["university", "middleSchool", "highSchool", "highSchoolApprenticeship", "universityApprenticeship"]
  },
  {
    title: "PRICING.cards.features.8.title",
    description: "PRICING.cards.features.8.description",
    isPremium: false,
    type: ["university", "middleSchool", "highSchool", "highSchoolApprenticeship", "universityApprenticeship"]
  },
  {
    title: "PRICING.cards.features.9.title",
    description: "PRICING.cards.features.9.description",
    isPremium: false,
    type: ["university", "middleSchool", "highSchool", "highSchoolApprenticeship", "universityApprenticeship"]
  },
  {
    title: "PRICING.cards.features.10.title",
    description: "PRICING.cards.features.10.description",
    isPremium: false,
    type: ["university", "middleSchool", "highSchool", "highSchoolApprenticeship", "universityApprenticeship"]
  },
  {
    title: "PRICING.cards.features.11.title",
    description: "PRICING.cards.features.11.description",
    isPremium: false,
    type: ["university", "middleSchool", "highSchool", "highSchoolApprenticeship", "universityApprenticeship"]
  },
  {
    title: "PRICING.cards.features.12.title",
    description: "PRICING.cards.features.12.description",
    isPremium: false,
    type: ["middleSchool", "highSchool", "highSchoolApprenticeship"]
  },
  {
    title: "PRICING.cards.features.13.title",
    description: "PRICING.cards.features.13.description",
    isPremium: true,
    type: ["university", "middleSchool", "highSchool", "universityApprenticeship", "highSchoolApprenticeship"]
  },
  {
    title: "PRICING.cards.features.14.title",
    description: "PRICING.cards.features.14.description",
    isPremium: true,
    type: ["universityApprenticeship", "highSchoolApprenticeship"]
  },
  {
    title: "PRICING.cards.features.15.title",
    description: "PRICING.cards.features.15.description",
    isPremium: true,
    type: ["university", "middleSchool", "highSchool", "highSchoolApprenticeship", "universityApprenticeship"]
  },
  {
    title: "PRICING.cards.features.16.title",
    description: "PRICING.cards.features.16.description",
    isPremium: true,
    type: ["university", "middleSchool", "highSchool", "highSchoolApprenticeship", "universityApprenticeship"]
  },
];

export const optionalFeatures: Array<PricingFeatureOption<number>> = [
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
