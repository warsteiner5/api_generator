import { LinkOfferToLotItem } from './link-offer-to-lot-item.interface';
import { OrganizationName } from './organization-name.interface';

export type ExternalLinkOfferToLotItem = LinkOfferToLotItem & { 'OrganizationInn'?: string | null; 'OrganizationName'?: string | null; };
