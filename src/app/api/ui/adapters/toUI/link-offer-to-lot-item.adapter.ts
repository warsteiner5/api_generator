import { ApiLinkOfferToLotItemDto } from '../../../swagger/models/api-link-offer-to-lot-item-dto';
import { LinkOfferToLotItem } from '../../models/link-offer-to-lot-item.interface';
import { adaptParticipantOfferToTradeOperationTypeAltEnumToUI } from './participant-offer-to-trade-operation-type-alt-enum.adapter';

export function adaptLinkOfferToLotItemToUI(source?: ApiLinkOfferToLotItemDto | null): LinkOfferToLotItem {
  return {
    createdOn: source?.CreatedOn ?? '',
    lastModificationDate: source?.LastModificationDate ?? '',
    lotItemId: source?.LotItemId ?? 0,
    lotItemOkeiName: source?.LotItemOkeiName ?? '',
    name: source?.Name ?? '',
    okeiCode: source?.OkeiCode ?? '',
    operationType: adaptParticipantOfferToTradeOperationTypeAltEnumToUI(source?.OperationType),
    organizerId: source?.OrganizerId ?? 0,
    participantOfferId: source?.ParticipantOfferId ?? 0,
    priceListId: source?.PriceListId ?? 0,
    publicationDate: source?.PublicationDate ?? '',
    unitPrice: source?.UnitPrice ?? 0,
    unitPriceWithoutVat: source?.UnitPriceWithoutVat ?? 0,
  };
}
