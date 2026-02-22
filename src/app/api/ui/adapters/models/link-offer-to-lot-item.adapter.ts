import { ApiLinkOfferToLotItemDto } from '../../../swagger/models/api-link-offer-to-lot-item-dto';
import { LinkOfferToLotItem } from '../../models/link-offer-to-lot-item.interface';
import { participantOfferToTradeOperationTypeAltEnumAdapter } from '../enums/participant-offer-to-trade-operation-type-alt-enum.adapter';

export const linkOfferToLotItemAdapter = (source?: ApiLinkOfferToLotItemDto | null): LinkOfferToLotItem => {
  return {
    createdOn: source?.CreatedOn,
    lastModificationDate: source?.LastModificationDate,
    lotItemId: source?.LotItemId,
    lotItemOkeiName: source?.LotItemOkeiName,
    name: source?.Name,
    okeiCode: source?.OkeiCode,
    operationType: source?.OperationType === null ? undefined : participantOfferToTradeOperationTypeAltEnumAdapter(source?.OperationType),
    organizerId: source?.OrganizerId,
    participantOfferId: source?.ParticipantOfferId,
    priceListId: source?.PriceListId,
    publicationDate: source?.PublicationDate,
    unitPrice: source?.UnitPrice,
    unitPriceWithoutVat: source?.UnitPriceWithoutVat,
  };
}
