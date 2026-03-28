import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { BannerComponent } from "../../shared/components/banner/banner.component";
import { ButtonComponent } from "../../shared/components/button/button.component";

@Component({
  selector: 'od-how-it-works',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    ButtonComponent
  ],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss'
})
export class HowItWorksComponent {
  readonly steps = [
    {
      title: '1. Inscription et premier échange',
      content: 'Nous partons de votre contexte, de vos priorités et de vos points de friction pour cadrer le bon niveau d’accompagnement.'
    },
    {
      title: '2. Diagnostic',
      content: 'Nous analysons votre organisation actuelle, les outils déjà utilisés et les besoins à centraliser en priorité.'
    },
    {
      title: '3. Cadrage du déploiement',
      content: 'Nous définissons un plan de mise en place simple, progressif et réaliste, aligné sur vos contraintes opérationnelles.'
    },
    {
      title: '4. Accompagnement',
      content: 'Nous avançons avec vous dans la prise en main, les ajustements et l’installation de nouveaux repères durables.'
    }
  ];
}
