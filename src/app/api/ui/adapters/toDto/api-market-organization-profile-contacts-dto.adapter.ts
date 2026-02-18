import { MarketOrganizationProfileContacts } from '../../models/market-organization-profile-contacts.interface';
import { ApiMarketOrganizationProfileContactsDto } from '../../../swagger/models/api-market-organization-profile-contacts-dto';
import { adaptApiMarketOfficeOrganizationContactDto } from './api-market-office-organization-contact-dto.adapter';
import { adaptApiMarketOrganizationProfileContactDto } from './api-market-organization-profile-contact-dto.adapter';
import { adaptApiMarketOrganizationProfileSocialMediaDto } from './api-market-organization-profile-social-media-dto.adapter';

export function adaptApiMarketOrganizationProfileContactsDto(source?: MarketOrganizationProfileContacts | null): ApiMarketOrganizationProfileContactsDto {
  return {
    Contacts: (source?.contacts ?? []).map((item) => adaptApiMarketOrganizationProfileContactDto(item)),
    Offices: (source?.offices ?? []).map((item) => adaptApiMarketOfficeOrganizationContactDto(item)),
    SocialMedia: adaptApiMarketOrganizationProfileSocialMediaDto(source?.socialMedia),
    Website: source?.website,
  };
}
