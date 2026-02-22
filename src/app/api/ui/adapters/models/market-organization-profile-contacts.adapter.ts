import { ApiMarketOrganizationProfileContactsDto } from '../../../swagger/models/api-market-organization-profile-contacts-dto';
import { MarketOrganizationProfileContacts } from '../../models/market-organization-profile-contacts.interface';
import { marketOfficeOrganizationContactAdapter } from './market-office-organization-contact.adapter';
import { marketOrganizationProfileContactAdapter } from './market-organization-profile-contact.adapter';
import { marketOrganizationProfileSocialMediaAdapter } from './market-organization-profile-social-media.adapter';

export const marketOrganizationProfileContactsAdapter = (source?: ApiMarketOrganizationProfileContactsDto | null): MarketOrganizationProfileContacts => {
  return {
    contacts: source?.Contacts?.map((item) => marketOrganizationProfileContactAdapter(item)),
    offices: source?.Offices?.map((item) => marketOfficeOrganizationContactAdapter(item)),
    socialMedia: source?.SocialMedia === null ? undefined : marketOrganizationProfileSocialMediaAdapter(source?.SocialMedia),
    website: source?.Website,
  };
}
