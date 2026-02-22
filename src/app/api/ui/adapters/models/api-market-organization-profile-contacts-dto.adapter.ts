import { MarketOrganizationProfileContacts } from '../../models/market-organization-profile-contacts.interface';
import { ApiMarketOrganizationProfileContactsDto } from '../../../swagger/models/api-market-organization-profile-contacts-dto';
import { apiMarketOfficeOrganizationContactDtoAdapter } from './api-market-office-organization-contact-dto.adapter';
import { apiMarketOrganizationProfileContactDtoAdapter } from './api-market-organization-profile-contact-dto.adapter';
import { apiMarketOrganizationProfileSocialMediaDtoAdapter } from './api-market-organization-profile-social-media-dto.adapter';

export const apiMarketOrganizationProfileContactsDtoAdapter = (source?: MarketOrganizationProfileContacts | null): ApiMarketOrganizationProfileContactsDto => {
  return {
    Contacts: source?.contacts?.map((item) => apiMarketOrganizationProfileContactDtoAdapter(item)),
    Offices: source?.offices?.map((item) => apiMarketOfficeOrganizationContactDtoAdapter(item)),
    SocialMedia: source?.socialMedia === null ? undefined : apiMarketOrganizationProfileSocialMediaDtoAdapter(source?.socialMedia),
    Website: source?.website,
  };
}
