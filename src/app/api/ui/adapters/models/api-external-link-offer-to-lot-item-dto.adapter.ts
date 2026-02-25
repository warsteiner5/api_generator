import { ExternalLinkOfferToLotItem } from '../../models/external-link-offer-to-lot-item.interface';
import { ApiExternalLinkOfferToLotItemDto } from '../../../swagger/models/api-external-link-offer-to-lot-item-dto';
import { apiLinkOfferToLotItemDtoAdapter } from './api-link-offer-to-lot-item-dto.adapter';

export const apiExternalLinkOfferToLotItemDtoAdapter = (source?: ExternalLinkOfferToLotItem | null): ApiExternalLinkOfferToLotItemDto => {
  return {
    ...apiLinkOfferToLotItemDtoAdapter(source as unknown as Parameters<typeof apiLinkOfferToLotItemDtoAdapter>[0]),
    OrganizationInn: source?.organizationInn,
    OrganizationName: source?.organizationName,
  };
}
