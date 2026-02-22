import { Industry } from './industry.interface';
import { MarketOrganizationProfileAppearance } from './market-organization-profile-appearance.interface';
import { MarketOrganizationProfileContacts } from './market-organization-profile-contacts.interface';
import { MarketOrganizationProfileDocument } from './market-organization-profile-document.interface';
import { MarketOrganizationProfileProducts } from './market-organization-profile-products.interface';
import { OrganizationProfileSectionInfoAlt } from './organization-profile-section-info-alt.interface';
import { TagView } from './tag-view.interface';

// @ts-ignore
export interface MarketOrganizationCompanyProfile {
  contacts: MarketOrganizationProfileContacts;
  deliveryRegions: string[];
  documents: MarketOrganizationProfileDocument[];
  gallery: string[];
  hasCatalogAgreement: boolean;
  images: MarketOrganizationProfileAppearance;
  industries: Industry[];
  products: MarketOrganizationProfileProducts;
  profileSectionInfos: OrganizationProfileSectionInfoAlt[];
  tags: TagView[];
  videos: string[];
}
