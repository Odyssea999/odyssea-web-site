import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { BannerComponent } from "../../shared/components/banner/banner.component";
import { ButtonComponent } from "../../shared/components/button/button.component";

@Component({
  selector: 'od-about',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    ButtonComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly values = [
    {
      title: 'Clarté',
      content: 'Nous voulons rendre les opérations quotidiennes plus lisibles, plus fluides et moins dispersées.'
    },
    {
      title: 'Proximité',
      content: 'Odyssea999 se construit au contact des besoins du terrain, avec une logique d’accompagnement concret.'
    },
    {
      title: 'Durabilité',
      content: 'Notre vision est d’apporter un cadre robuste qui reste utile dans le temps, même quand l’organisation évolue.'
    }
  ];
}
