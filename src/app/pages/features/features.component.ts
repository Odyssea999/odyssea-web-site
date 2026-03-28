import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { BannerComponent } from "../../shared/components/banner/banner.component";
import { ButtonComponent } from "../../shared/components/button/button.component";

@Component({
  selector: 'od-features',
  standalone: true,
  imports: [
    TranslateModule,
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
      title: 'PAGES.features.groups.ged.title',
      description: 'PAGES.features.groups.ged.description',
      items: [
        'PAGES.features.groups.ged.items.1',
        'PAGES.features.groups.ged.items.2',
        'PAGES.features.groups.ged.items.3'
      ]
    },
    {
      title: 'PAGES.features.groups.organization.title',
      description: 'PAGES.features.groups.organization.description',
      items: [
        'PAGES.features.groups.organization.items.1',
        'PAGES.features.groups.organization.items.2',
        'PAGES.features.groups.organization.items.3'
      ]
    },
    {
      title: 'PAGES.features.groups.tracking.title',
      description: 'PAGES.features.groups.tracking.description',
      items: [
        'PAGES.features.groups.tracking.items.1',
        'PAGES.features.groups.tracking.items.2',
        'PAGES.features.groups.tracking.items.3'
      ]
    },
    {
      title: 'PAGES.features.groups.communication.title',
      description: 'PAGES.features.groups.communication.description',
      items: [
        'PAGES.features.groups.communication.items.1',
        'PAGES.features.groups.communication.items.2',
        'PAGES.features.groups.communication.items.3'
      ]
    }
  ];

  readonly highlights = [
    'PAGES.features.highlights.1',
    'PAGES.features.highlights.2',
    'PAGES.features.highlights.3'
  ];
}
