import { ApiExternalLinkOfferToLotItemDto } from '../../../swagger/models/api-external-link-offer-to-lot-item-dto';
import { ExternalLinkOfferToLotItem } from '../../models/external-link-offer-to-lot-item.interface';

export const externalLinkOfferToLotItemAdapter = (source?: ApiExternalLinkOfferToLotItemDto | null): ExternalLinkOfferToLotItem => {
  return (source ?? {}) as ExternalLinkOfferToLotItem;
}
