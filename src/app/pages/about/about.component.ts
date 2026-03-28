import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { BannerComponent } from "../../shared/components/banner/banner.component";
import { ButtonComponent } from "../../shared/components/button/button.component";

@Component({
  selector: 'od-about',
  standalone: true,
  imports: [
    TranslateModule,
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
      title: 'PAGES.about.values.clarity.title',
      content: 'PAGES.about.values.clarity.content'
    },
    {
      title: 'PAGES.about.values.proximity.title',
      content: 'PAGES.about.values.proximity.content'
    },
    {
      title: 'PAGES.about.values.sustainability.title',
      content: 'PAGES.about.values.sustainability.content'
    }
  ];
}
