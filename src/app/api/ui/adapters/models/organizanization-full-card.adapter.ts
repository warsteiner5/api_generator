import { ApiOrganizanizationFullCardDto } from '../../../swagger/models/api-organizanization-full-card-dto';
import { OrganizanizationFullCard } from '../../models/organizanization-full-card.interface';
import { industryAdapter } from './industry.adapter';
import { marketOrganizationCommonAddressAdapter } from './market-organization-common-address.adapter';
import { marketOrganizationCommonBankAdapter } from './market-organization-common-bank.adapter';
import { marketOrganizationCommonBaseInfoAltAdapter } from './market-organization-common-base-info-alt.adapter';
import { marketOrganizationProfileAppearanceAdapter } from './market-organization-profile-appearance.adapter';
import { marketOrganizationProfileContactsAdapter } from './market-organization-profile-contacts.adapter';
import { marketOrganizationProfileProductsAdapter } from './market-organization-profile-products.adapter';
import { organizationProfileDocumentAdapter } from './organization-profile-document.adapter';
import { tagViewAdapter } from './tag-view.adapter';

export const organizanizationFullCardAdapter = (source?: ApiOrganizanizationFullCardDto | null): OrganizanizationFullCard => {
  return {
    addresses: source?.Addresses === null ? undefined : marketOrganizationCommonAddressAdapter(source?.Addresses),
    appearance: source?.Appearance === null ? undefined : marketOrganizationProfileAppearanceAdapter(source?.Appearance),
    bankRequisites: source?.BankRequisites === null ? undefined : marketOrganizationCommonBankAdapter(source?.BankRequisites),
    baseInfo: source?.BaseInfo === null ? undefined : marketOrganizationCommonBaseInfoAltAdapter(source?.BaseInfo),
    contacts: source?.Contacts === null ? undefined : marketOrganizationProfileContactsAdapter(source?.Contacts),
    deliveryRegions: source?.DeliveryRegions,
    documents: source?.Documents?.map((item) => organizationProfileDocumentAdapter(item)),
    gallery: source?.Gallery,
    hasCatalogAgreement: source?.HasCatalogAgreement,
    industries: source?.Industries?.map((item) => industryAdapter(item)),
    isFavorite: source?.IsFavorite,
    products: source?.Products === null ? undefined : marketOrganizationProfileProductsAdapter(source?.Products),
    tags: source?.Tags?.map((item) => tagViewAdapter(item)),
    videos: source?.Videos,
  };
}
