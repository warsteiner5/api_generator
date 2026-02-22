import { ExternalLinkOfferToLotItem } from '../../models/external-link-offer-to-lot-item.interface';
import { ApiExternalLinkOfferToLotItemDto } from '../../../swagger/models/api-external-link-offer-to-lot-item-dto';

export const apiExternalLinkOfferToLotItemDtoAdapter = (source?: ExternalLinkOfferToLotItem | null): ApiExternalLinkOfferToLotItemDto => {
  return (source ?? {}) as ApiExternalLinkOfferToLotItemDto;
}
