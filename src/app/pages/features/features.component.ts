import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { BannerComponent } from "../../shared/components/banner/banner.component";
import { ButtonComponent } from "../../shared/components/button/button.component";

@Component({
  selector: 'od-features',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    ButtonComponent
  ],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  readonly featureGroups = [
    {
      title: 'Gestion documentaire (GED)',
      description: "Centralisez vos documents administratifs et pédagogiques dans un seul espace accessible aux bonnes personnes au bon moment.",
      items: [
        'Classement des documents par promotion, classe ou service',
        'Partage encadré des supports de cours et pièces administratives',
        'Historique des mises à jour pour garder une trace des changements'
      ]
    },
    {
      title: 'Organisation quotidienne',
      description: "Évitez les allers-retours entre plusieurs outils et gardez une vision claire des opérations de l'établissement.",
      items: [
        "Gestion des emplois du temps et des modifications de planning",
        'Suivi des présences, retards et absences',
        "Pilotage des tâches internes pour l'équipe pédagogique et administrative"
      ]
    },
    {
      title: 'Outils de suivi',
      description: "Suivez l'activité de l'établissement en temps réel pour prendre les bonnes décisions plus vite.",
      items: [
        'Vue d’ensemble sur les événements clés de la journée',
        'Suivi des élèves, des promotions et des interactions importantes',
        'Indicateurs utiles pour repérer les points de blocage rapidement'
      ]
    },
    {
      title: 'Communication intégrée',
      description: "Fluidifiez les échanges sans multiplier les canaux ni perdre d'informations en route.",
      items: [
        'Messagerie instantanée pour les communications du quotidien',
        'Diffusion d’actualités importantes à toute la communauté',
        'Coordination plus simple entre direction, équipes et apprenants'
      ]
    }
  ];

  readonly highlights = [
    'Une solution pensée pour centraliser les usages essentiels d’un établissement',
    'Un accompagnement orienté terrain, pas une simple livraison logicielle',
    'Une structure flexible qui s’adapte à vos méthodes plutôt que l’inverse'
  ];
}
