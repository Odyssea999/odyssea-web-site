import {ISeoInterface} from "./seo.interface";
import {Injectable} from "@angular/core";
import {Meta, Title} from "@angular/platform-browser";
import {FacebookMetaTag, MetaTags, TwitterMetaTag} from "./meta.type";

const MetaTagKeys: MetaTags = {
  description: 'description',
  twitter: {
    image: 'twitter:image',
    title: 'twitter:title',
    creator: 'twitter:creator',
    description: 'twitter:description',
    card: 'twitter:card'
  },
  facebook: {
    url: 'og:url',
    type: 'og:type',
    title: 'og:title',
    image: 'og:image'
  }
}

@Injectable()
export class SeoService implements ISeoInterface {

  constructor(private readonly titleService: Title, private readonly meta: Meta ) {}

  setMetaDescription(description: string): void {
    this.meta.updateTag({
      content: description,
      name: MetaTagKeys.description
    })
  }

  setMetaTitle(title: string): void {
    this.titleService.setTitle(title);
  }

  setTwitterMetaTags(tags: TwitterMetaTag): void {
    this.meta.updateTag({
      name: MetaTagKeys.twitter.title,
      content: tags.title,
    });
    this.meta.updateTag({
      name: MetaTagKeys.twitter.image,
      content: tags.image
    });
    this.meta.updateTag({
      name: MetaTagKeys.twitter.card,
      content: tags.card
    });
    this.meta.updateTag({
      name: MetaTagKeys.twitter.creator,
      content: tags.creator
    });
    this.meta.updateTag({
      name: MetaTagKeys.twitter.description,
      content: tags.description
    });
  }
  setFacebookMetaTags(tags: FacebookMetaTag): void {
    this.meta.updateTag({
      property: MetaTagKeys.facebook.image,
      content: tags.image
    });
    this.meta.updateTag({
      property: MetaTagKeys.facebook.title,
      content: tags.title
    });
    this.meta.updateTag({
      property: MetaTagKeys.facebook.url,
      content: tags.url
    });
    this.meta.updateTag({
      property: MetaTagKeys.facebook.type,
      content: tags.type
    });
  }

}
