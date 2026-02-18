/* tslint:disable */
/* eslint-disable */
import { ApiIndustryDto } from '../models/api-industry-dto';
import { ApiMarketOrganizationCommonAddressDto } from '../models/api-market-organization-common-address-dto';
import { ApiMarketOrganizationCommonBankDto } from '../models/api-market-organization-common-bank-dto';
import { ApiMarketOrganizationCommonBaseInfoAltDto } from '../models/api-market-organization-common-base-info';
import { ApiMarketOrganizationProfileAppearanceDto } from '../models/api-market-organization-profile-appearance-dto';
import { ApiMarketOrganizationProfileContactsDto } from '../models/api-market-organization-profile-contacts-dto';
import { ApiMarketOrganizationProfileProductsDto } from '../models/api-market-organization-profile-products-dto';
import { ApiOrganizationProfileDocumentDto } from '../models/api-organization-profile-document-dto';
import { ApiTagViewDto } from '../models/api-tag-view-dto';
export interface ApiOrganizanizationFullCardDto {
  Addresses?: ApiMarketOrganizationCommonAddressDto | null;
  Appearance?: ApiMarketOrganizationProfileAppearanceDto | null;
  BankRequisites?: ApiMarketOrganizationCommonBankDto | null;
  BaseInfo?: ApiMarketOrganizationCommonBaseInfoAltDto | null;
  Contacts?: ApiMarketOrganizationProfileContactsDto | null;
  DeliveryRegions?: Array<string> | null;
  Documents?: Array<ApiOrganizationProfileDocumentDto> | null;
  Gallery?: Array<string> | null;
  HasCatalogAgreement?: boolean;
  Industries?: Array<ApiIndustryDto> | null;
  IsFavorite?: boolean;
  Products?: ApiMarketOrganizationProfileProductsDto | null;
  Tags?: Array<ApiTagViewDto> | null;
  Videos?: Array<string> | null;
}
