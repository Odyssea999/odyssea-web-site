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
    this.meta.addTags([
      {
        name: MetaTagKeys.twitter.title,
        content: tags.title,
      },
      {
        name: MetaTagKeys.twitter.image,
        content: tags.image
      },
      {
        name: MetaTagKeys.twitter.card,
        content: tags.card
      },
      {
        name: MetaTagKeys.twitter.creator,
        content: tags.creator
      },
      {
        name: MetaTagKeys.twitter.description,
        content: tags.description
      }
    ])
  }
  setFacebookMetaTags(tags: FacebookMetaTag): void {
    this.meta.addTags([
      {
        property: MetaTagKeys.facebook.image,
        content: tags.image
      },
      {
        property: MetaTagKeys.facebook.title,
        content: tags.title
      },
      {
        property: MetaTagKeys.facebook.url,
        content: tags.url
      },
      {
        property: MetaTagKeys.facebook.type,
        content: tags.type
      }
    ])
  }

}
