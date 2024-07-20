/**
 * All Meta tags combined
 */
export type MetaTags = {
  description: string;
  twitter: TwitterMetaTag;
  facebook: FacebookMetaTag;
}

/**
 * Facebook Meta tags
 */
export type FacebookMetaTag = {
  title: string;
  image: string;
  type: string;
  url: string;
}

/**
 * Twitter Meta tags
 */
export type TwitterMetaTag = {
  card: string;
  creator: string;
  title: string;
  description: string;
  image: string;
}


