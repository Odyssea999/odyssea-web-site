import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { BannerComponent } from "../../shared/components/banner/banner.component";
import { ButtonComponent } from "../../shared/components/button/button.component";

@Component({
  selector: 'od-faq',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    ButtonComponent
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  readonly faqItems = [
    {
      question: 'À qui s’adresse Odyssea999 ?',
      answer: 'Odyssea999 s’adresse aux établissements qui veulent centraliser leur organisation, leurs documents et leur suivi opérationnel dans un seul environnement.'
    },
    {
      question: 'Est-ce qu’Odyssea999 remplace plusieurs outils ?',
      answer: 'Oui. L’objectif est justement de limiter la multiplication des solutions en regroupant les usages clés dans un cadre plus cohérent.'
    },
    {
      question: 'Proposez-vous un accompagnement au démarrage ?',
      answer: 'Oui. La démarche inclut un diagnostic, un cadrage des besoins et un accompagnement progressif pour faciliter la prise en main.'
    },
    {
      question: 'Peut-on adapter la solution à notre fonctionnement ?',
      answer: 'La méthode Odyssea999 cherche à s’aligner sur vos priorités réelles pour déployer une organisation utile, compréhensible et durable.'
    },
    {
      question: 'Comment découvrir la solution plus concrètement ?',
      answer: 'Vous pouvez demander une démo ou consulter la page "Comment ça marche" pour voir le parcours client du premier échange à l’accompagnement.'
    }
  ];
}
