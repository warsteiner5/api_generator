import { OrganizanizationFullCard } from '../../models/organizanization-full-card.interface';
import { ApiOrganizanizationFullCardDto } from '../../../swagger/models/api-organizanization-full-card-dto';
import { adaptApiIndustryDto } from './api-industry-dto.adapter';
import { adaptApiMarketOrganizationCommonAddressDto } from './api-market-organization-common-address-dto.adapter';
import { adaptApiMarketOrganizationCommonBankDto } from './api-market-organization-common-bank-dto.adapter';
import { adaptApiMarketOrganizationCommonBaseInfoAltDto } from './api-market-organization-common-base-info.adapter';
import { adaptApiMarketOrganizationProfileAppearanceDto } from './api-market-organization-profile-appearance-dto.adapter';
import { adaptApiMarketOrganizationProfileContactsDto } from './api-market-organization-profile-contacts-dto.adapter';
import { adaptApiMarketOrganizationProfileProductsDto } from './api-market-organization-profile-products-dto.adapter';
import { adaptApiOrganizationProfileDocumentDto } from './api-organization-profile-document-dto.adapter';
import { adaptApiTagViewDto } from './api-tag-view-dto.adapter';

export function adaptApiOrganizanizationFullCardDto(source?: OrganizanizationFullCard | null): ApiOrganizanizationFullCardDto {
  return {
    Addresses: adaptApiMarketOrganizationCommonAddressDto(source?.addresses),
    Appearance: adaptApiMarketOrganizationProfileAppearanceDto(source?.appearance),
    BankRequisites: adaptApiMarketOrganizationCommonBankDto(source?.bankRequisites),
    BaseInfo: adaptApiMarketOrganizationCommonBaseInfoAltDto(source?.baseInfo),
    Contacts: adaptApiMarketOrganizationProfileContactsDto(source?.contacts),
    DeliveryRegions: source?.deliveryRegions ?? [],
    Documents: (source?.documents ?? []).map((item) => adaptApiOrganizationProfileDocumentDto(item)),
    Gallery: source?.gallery ?? [],
    HasCatalogAgreement: source?.hasCatalogAgreement,
    Industries: (source?.industries ?? []).map((item) => adaptApiIndustryDto(item)),
    IsFavorite: source?.isFavorite,
    Products: adaptApiMarketOrganizationProfileProductsDto(source?.products),
    Tags: (source?.tags ?? []).map((item) => adaptApiTagViewDto(item)),
    Videos: source?.videos ?? [],
  };
}
