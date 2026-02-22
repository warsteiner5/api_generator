import { MarketOfficeOrganizationContact } from './market-office-organization-contact.interface';
import { MarketOrganizationProfileContact } from './market-organization-profile-contact.interface';
import { MarketOrganizationProfileSocialMedia } from './market-organization-profile-social-media.interface';

// @ts-ignore
export interface MarketOrganizationProfileContacts {
  contacts: MarketOrganizationProfileContact[];
  offices: MarketOfficeOrganizationContact[];
  socialMedia: MarketOrganizationProfileSocialMedia;
  website: string;
}
