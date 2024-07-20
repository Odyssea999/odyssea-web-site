import {NgModule} from "@angular/core";
import {ISeoInterface} from "./services/seo/seo.interface";
import {SeoService} from "./services/seo/seo.service";

@NgModule({
  providers: [
    {
      provide: ISeoInterface,
      useClass: SeoService
    }
  ]
})
export class SharedModule {}
