import { OrganizanizationFullCard } from '../../models/organizanization-full-card.interface';
import { ApiOrganizanizationFullCardDto } from '../../../swagger/models/api-organizanization-full-card-dto';
import { apiIndustryDtoAdapter } from './api-industry-dto.adapter';
import { apiMarketOrganizationCommonAddressDtoAdapter } from './api-market-organization-common-address-dto.adapter';
import { apiMarketOrganizationCommonBankDtoAdapter } from './api-market-organization-common-bank-dto.adapter';
import { apiMarketOrganizationCommonBaseInfoAltDtoAdapter } from './api-market-organization-common-base-info.adapter';
import { apiMarketOrganizationProfileAppearanceDtoAdapter } from './api-market-organization-profile-appearance-dto.adapter';
import { apiMarketOrganizationProfileContactsDtoAdapter } from './api-market-organization-profile-contacts-dto.adapter';
import { apiMarketOrganizationProfileProductsDtoAdapter } from './api-market-organization-profile-products-dto.adapter';
import { apiOrganizationProfileDocumentDtoAdapter } from './api-organization-profile-document-dto.adapter';
import { apiTagViewDtoAdapter } from './api-tag-view-dto.adapter';

export const apiOrganizanizationFullCardDtoAdapter = (source?: OrganizanizationFullCard | null): ApiOrganizanizationFullCardDto => {
  return {
    Addresses: source?.addresses === null ? undefined : apiMarketOrganizationCommonAddressDtoAdapter(source?.addresses),
    Appearance: source?.appearance === null ? undefined : apiMarketOrganizationProfileAppearanceDtoAdapter(source?.appearance),
    BankRequisites: source?.bankRequisites === null ? undefined : apiMarketOrganizationCommonBankDtoAdapter(source?.bankRequisites),
    BaseInfo: source?.baseInfo === null ? undefined : apiMarketOrganizationCommonBaseInfoAltDtoAdapter(source?.baseInfo),
    Contacts: source?.contacts === null ? undefined : apiMarketOrganizationProfileContactsDtoAdapter(source?.contacts),
    DeliveryRegions: source?.deliveryRegions,
    Documents: source?.documents?.map((item) => apiOrganizationProfileDocumentDtoAdapter(item)),
    Gallery: source?.gallery,
    HasCatalogAgreement: source?.hasCatalogAgreement,
    Industries: source?.industries?.map((item) => apiIndustryDtoAdapter(item)),
    IsFavorite: source?.isFavorite,
    Products: source?.products === null ? undefined : apiMarketOrganizationProfileProductsDtoAdapter(source?.products),
    Tags: source?.tags?.map((item) => apiTagViewDtoAdapter(item)),
    Videos: source?.videos,
  };
}
