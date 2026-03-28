import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { BannerComponent } from "../../shared/components/banner/banner.component";
import { ButtonComponent } from "../../shared/components/button/button.component";

@Component({
  selector: 'od-faq',
  standalone: true,
  imports: [
    TranslateModule,
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
      question: 'PAGES.faq.items.1.question',
      answer: 'PAGES.faq.items.1.answer'
    },
    {
      question: 'PAGES.faq.items.2.question',
      answer: 'PAGES.faq.items.2.answer'
    },
    {
      question: 'PAGES.faq.items.3.question',
      answer: 'PAGES.faq.items.3.answer'
    },
    {
      question: 'PAGES.faq.items.4.question',
      answer: 'PAGES.faq.items.4.answer'
    },
    {
      question: 'PAGES.faq.items.5.question',
      answer: 'PAGES.faq.items.5.answer'
    }
  ];
}
