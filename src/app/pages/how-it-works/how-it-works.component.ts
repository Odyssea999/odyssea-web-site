import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { BannerComponent } from "../../shared/components/banner/banner.component";
import { ButtonComponent } from "../../shared/components/button/button.component";

@Component({
  selector: 'od-how-it-works',
  standalone: true,
  imports: [
    TranslateModule,
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
      title: 'PAGES.howItWorks.steps.1.title',
      content: 'PAGES.howItWorks.steps.1.content'
    },
    {
      title: 'PAGES.howItWorks.steps.2.title',
      content: 'PAGES.howItWorks.steps.2.content'
    },
    {
      title: 'PAGES.howItWorks.steps.3.title',
      content: 'PAGES.howItWorks.steps.3.content'
    },
    {
      title: 'PAGES.howItWorks.steps.4.title',
      content: 'PAGES.howItWorks.steps.4.content'
    }
  ];
}
