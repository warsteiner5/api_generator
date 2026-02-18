import { ApiMarketOrganizationCompanyProfileDto } from '../../../swagger/models/api-market-organization-company-profile-dto';
import { MarketOrganizationCompanyProfile } from '../../models/market-organization-company-profile.interface';
import { adaptIndustryToUI } from './industry.adapter';
import { adaptMarketOrganizationProfileAppearanceToUI } from './market-organization-profile-appearance.adapter';
import { adaptMarketOrganizationProfileContactsToUI } from './market-organization-profile-contacts.adapter';
import { adaptMarketOrganizationProfileDocumentToUI } from './market-organization-profile-document.adapter';
import { adaptMarketOrganizationProfileProductsToUI } from './market-organization-profile-products.adapter';
import { adaptOrganizationProfileSectionInfoAltToUI } from './organization-profile-section-info-alt.adapter';
import { adaptTagViewToUI } from './tag-view.adapter';

export function adaptMarketOrganizationCompanyProfileToUI(source?: ApiMarketOrganizationCompanyProfileDto | null): MarketOrganizationCompanyProfile {
  return {
    contacts: adaptMarketOrganizationProfileContactsToUI(source?.Contacts),
    deliveryRegions: source?.DeliveryRegions ?? [],
    documents: (source?.Documents ?? []).map((item) => adaptMarketOrganizationProfileDocumentToUI(item)),
    gallery: source?.Gallery ?? [],
    hasCatalogAgreement: source?.HasCatalogAgreement ?? false,
    images: adaptMarketOrganizationProfileAppearanceToUI(source?.Images),
    industries: (source?.Industries ?? []).map((item) => adaptIndustryToUI(item)),
    products: adaptMarketOrganizationProfileProductsToUI(source?.Products),
    profileSectionInfos: (source?.ProfileSectionInfos ?? []).map((item) => adaptOrganizationProfileSectionInfoAltToUI(item)),
    tags: (source?.Tags ?? []).map((item) => adaptTagViewToUI(item)),
    videos: source?.Videos ?? [],
  };
}
