import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {ButtonComponent} from "../button/button.component";
import {RouterLink} from "@angular/router";
import {SvgComponent} from "../svg/svg.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'std-navbar',
  standalone: true,
  imports: [
    TranslateModule,
    ButtonComponent,
    RouterLink,
    SvgComponent,
    NgClass
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {

  isNavbarOpened: boolean = false;

  closeIcon: string = "/icons/close.svg";
  openIcon: string = "/icons/equal_sign.svg";

  toggleShowNavbar(): void {
    console.log("clicking here : ", this.isNavbarOpened)
    this.isNavbarOpened = !this.isNavbarOpened;
    console.log("clicking here bootom : ", this.isNavbarOpened)

  }

  toggleNavbar(): Record<string, string | boolean> {
    return {
      "show-nav": this.isNavbarOpened
    }
  }
}
