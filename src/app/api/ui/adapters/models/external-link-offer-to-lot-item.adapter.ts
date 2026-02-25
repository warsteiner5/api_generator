import { ApiExternalLinkOfferToLotItemDto } from '../../../swagger/models/api-external-link-offer-to-lot-item-dto';
import { ExternalLinkOfferToLotItem } from '../../models/external-link-offer-to-lot-item.interface';
import { linkOfferToLotItemAdapter } from './link-offer-to-lot-item.adapter';

export const externalLinkOfferToLotItemAdapter = (source?: ApiExternalLinkOfferToLotItemDto | null): ExternalLinkOfferToLotItem => {
  return {
    ...linkOfferToLotItemAdapter(source as unknown as Parameters<typeof linkOfferToLotItemAdapter>[0]),
    organizationInn: source?.OrganizationInn,
    organizationName: source?.OrganizationName,
  };
}
