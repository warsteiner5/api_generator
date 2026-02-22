import { Industry } from './industry.interface';
import { MarketOrganizationCommonAddress } from './market-organization-common-address.interface';
import { MarketOrganizationCommonBank } from './market-organization-common-bank.interface';
import { MarketOrganizationCommonBaseInfoAlt } from './market-organization-common-base-info-alt.interface';
import { MarketOrganizationProfileAppearance } from './market-organization-profile-appearance.interface';
import { MarketOrganizationProfileContacts } from './market-organization-profile-contacts.interface';
import { MarketOrganizationProfileProducts } from './market-organization-profile-products.interface';
import { OrganizationProfileDocument } from './organization-profile-document.interface';
import { TagView } from './tag-view.interface';

// @ts-ignore
export interface OrganizanizationFullCard {
  addresses: MarketOrganizationCommonAddress;
  appearance: MarketOrganizationProfileAppearance;
  bankRequisites: MarketOrganizationCommonBank;
  baseInfo: MarketOrganizationCommonBaseInfoAlt;
  contacts: MarketOrganizationProfileContacts;
  deliveryRegions: string[];
  documents: OrganizationProfileDocument[];
  gallery: string[];
  hasCatalogAgreement: boolean;
  industries: Industry[];
  isFavorite: boolean;
  products: MarketOrganizationProfileProducts;
  tags: TagView[];
  videos: string[];
}
