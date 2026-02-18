import { ApiOrganizanizationFullCardDto } from '../../../swagger/models/api-organizanization-full-card-dto';
import { OrganizanizationFullCard } from '../../models/organizanization-full-card.interface';
import { adaptIndustryToUI } from './industry.adapter';
import { adaptMarketOrganizationCommonAddressToUI } from './market-organization-common-address.adapter';
import { adaptMarketOrganizationCommonBankToUI } from './market-organization-common-bank.adapter';
import { adaptMarketOrganizationCommonBaseInfoAltToUI } from './market-organization-common-base-info-alt.adapter';
import { adaptMarketOrganizationProfileAppearanceToUI } from './market-organization-profile-appearance.adapter';
import { adaptMarketOrganizationProfileContactsToUI } from './market-organization-profile-contacts.adapter';
import { adaptMarketOrganizationProfileProductsToUI } from './market-organization-profile-products.adapter';
import { adaptOrganizationProfileDocumentToUI } from './organization-profile-document.adapter';
import { adaptTagViewToUI } from './tag-view.adapter';

export function adaptOrganizanizationFullCardToUI(source?: ApiOrganizanizationFullCardDto | null): OrganizanizationFullCard {
  return {
    addresses: adaptMarketOrganizationCommonAddressToUI(source?.Addresses),
    appearance: adaptMarketOrganizationProfileAppearanceToUI(source?.Appearance),
    bankRequisites: adaptMarketOrganizationCommonBankToUI(source?.BankRequisites),
    baseInfo: adaptMarketOrganizationCommonBaseInfoAltToUI(source?.BaseInfo),
    contacts: adaptMarketOrganizationProfileContactsToUI(source?.Contacts),
    deliveryRegions: source?.DeliveryRegions ?? [],
    documents: (source?.Documents ?? []).map((item) => adaptOrganizationProfileDocumentToUI(item)),
    gallery: source?.Gallery ?? [],
    hasCatalogAgreement: source?.HasCatalogAgreement ?? false,
    industries: (source?.Industries ?? []).map((item) => adaptIndustryToUI(item)),
    isFavorite: source?.IsFavorite ?? false,
    products: adaptMarketOrganizationProfileProductsToUI(source?.Products),
    tags: (source?.Tags ?? []).map((item) => adaptTagViewToUI(item)),
    videos: source?.Videos ?? [],
  };
}
