import { ApiMarketOrganizationCompanyProfileDto } from '../../../swagger/models/api-market-organization-company-profile-dto';
import { MarketOrganizationCompanyProfile } from '../../models/market-organization-company-profile.interface';
import { industryAdapter } from './industry.adapter';
import { marketOrganizationProfileAppearanceAdapter } from './market-organization-profile-appearance.adapter';
import { marketOrganizationProfileContactsAdapter } from './market-organization-profile-contacts.adapter';
import { marketOrganizationProfileDocumentAdapter } from './market-organization-profile-document.adapter';
import { marketOrganizationProfileProductsAdapter } from './market-organization-profile-products.adapter';
import { organizationProfileSectionInfoAltAdapter } from './organization-profile-section-info-alt.adapter';
import { tagViewAdapter } from './tag-view.adapter';

export const marketOrganizationCompanyProfileAdapter = (source?: ApiMarketOrganizationCompanyProfileDto | null): MarketOrganizationCompanyProfile => {
  return {
    contacts: source?.Contacts === null ? undefined : marketOrganizationProfileContactsAdapter(source?.Contacts),
    deliveryRegions: source?.DeliveryRegions,
    documents: source?.Documents?.map((item) => marketOrganizationProfileDocumentAdapter(item)),
    gallery: source?.Gallery,
    hasCatalogAgreement: source?.HasCatalogAgreement,
    images: source?.Images === null ? undefined : marketOrganizationProfileAppearanceAdapter(source?.Images),
    industries: source?.Industries?.map((item) => industryAdapter(item)),
    products: source?.Products === null ? undefined : marketOrganizationProfileProductsAdapter(source?.Products),
    profileSectionInfos: source?.ProfileSectionInfos?.map((item) => organizationProfileSectionInfoAltAdapter(item)),
    tags: source?.Tags?.map((item) => tagViewAdapter(item)),
    videos: source?.Videos,
  };
}
