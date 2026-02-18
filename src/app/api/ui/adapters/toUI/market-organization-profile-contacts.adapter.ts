import { ApiMarketOrganizationProfileContactsDto } from '../../../swagger/models/api-market-organization-profile-contacts-dto';
import { MarketOrganizationProfileContacts } from '../../models/market-organization-profile-contacts.interface';
import { adaptMarketOfficeOrganizationContactToUI } from './market-office-organization-contact.adapter';
import { adaptMarketOrganizationProfileContactToUI } from './market-organization-profile-contact.adapter';
import { adaptMarketOrganizationProfileSocialMediaToUI } from './market-organization-profile-social-media.adapter';

export function adaptMarketOrganizationProfileContactsToUI(source?: ApiMarketOrganizationProfileContactsDto | null): MarketOrganizationProfileContacts {
  return {
    contacts: (source?.Contacts ?? []).map((item) => adaptMarketOrganizationProfileContactToUI(item)),
    offices: (source?.Offices ?? []).map((item) => adaptMarketOfficeOrganizationContactToUI(item)),
    socialMedia: adaptMarketOrganizationProfileSocialMediaToUI(source?.SocialMedia),
    website: source?.Website ?? '',
  };
}
