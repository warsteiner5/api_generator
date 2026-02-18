/* tslint:disable */
/* eslint-disable */
import { ApiIndustryDto } from '../models/api-industry-dto';
import { ApiMarketOrganizationProfileAppearanceDto } from '../models/api-market-organization-profile-appearance-dto';
import { ApiMarketOrganizationProfileContactsDto } from '../models/api-market-organization-profile-contacts-dto';
import { ApiMarketOrganizationProfileDocumentDto } from '../models/api-market-organization-profile-document-dto';
import { ApiMarketOrganizationProfileProductsDto } from '../models/api-market-organization-profile-products-dto';
import { ApiOrganizationProfileSectionInfoAltDto } from '../models/api-organization-profile-section-info';
import { ApiTagViewDto } from '../models/api-tag-view-dto';
export interface ApiMarketOrganizationCompanyProfileDto {
  Contacts?: ApiMarketOrganizationProfileContactsDto | null;
  DeliveryRegions?: Array<string> | null;
  Documents?: Array<ApiMarketOrganizationProfileDocumentDto> | null;
  Gallery?: Array<string> | null;
  HasCatalogAgreement?: boolean;
  Images?: ApiMarketOrganizationProfileAppearanceDto | null;
  Industries?: Array<ApiIndustryDto> | null;
  Products?: ApiMarketOrganizationProfileProductsDto | null;
  ProfileSectionInfos?: Array<ApiOrganizationProfileSectionInfoAltDto> | null;
  Tags?: Array<ApiTagViewDto> | null;
  Videos?: Array<string> | null;
}
