import {FacebookMetaTag, TwitterMetaTag} from "./meta.type";

/**
 * Manage meta tags
 */
export interface ISeoInterface {
  /**
   * Set <head> page <title> tag
   * @param title
   */
  setMetaTitle(title: string): void;
  /**
   * Set meta tag <description>
   * @param description
   */
  setMetaDescription(description: string): void;
  /**
   * Set all twitter meta tags
   * @param tags
   */
  setTwitterMetaTags(tags: TwitterMetaTag): void;
  /**
   * Set facebook all meta tags
   * @param tags
   */
  setFacebookMetaTags(tags: FacebookMetaTag): void;
}

export const ISeoInterface = Symbol('ISeoInterface');
