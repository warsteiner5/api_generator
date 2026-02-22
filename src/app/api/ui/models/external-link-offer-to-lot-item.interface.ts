import { LinkOfferToLotItem } from './link-offer-to-lot-item.interface';
import { OrganizationName } from './organization-name.interface';

// @ts-ignore
export interface ExternalLinkOfferToLotItem extends LinkOfferToLotItem {
  organizationInn: string;
  organizationName: string;
}
