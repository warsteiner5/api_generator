/* tslint:disable */
/* eslint-disable */
import { ApiMarketOfficeOrganizationContactDto } from '../models/api-market-office-organization-contact-dto';
import { ApiMarketOrganizationProfileContactDto } from '../models/api-market-organization-profile-contact-dto';
import { ApiMarketOrganizationProfileSocialMediaDto } from '../models/api-market-organization-profile-social-media-dto';
export interface ApiMarketOrganizationProfileContactsDto {
  Contacts?: Array<ApiMarketOrganizationProfileContactDto> | null;
  Offices?: Array<ApiMarketOfficeOrganizationContactDto> | null;
  SocialMedia?: ApiMarketOrganizationProfileSocialMediaDto | null;
  Website?: string | null;
}
