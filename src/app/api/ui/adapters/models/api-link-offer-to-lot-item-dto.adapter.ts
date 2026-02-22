import { LinkOfferToLotItem } from '../../models/link-offer-to-lot-item.interface';
import { ApiLinkOfferToLotItemDto } from '../../../swagger/models/api-link-offer-to-lot-item-dto';
import { apiParticipantOfferToTradeOperationTypeAltEnumAdapter } from '../enums/api-participant-offer-to-trade-operation-type.adapter';

export const apiLinkOfferToLotItemDtoAdapter = (source?: LinkOfferToLotItem | null): ApiLinkOfferToLotItemDto => {
  return {
    CreatedOn: source?.createdOn,
    LastModificationDate: source?.lastModificationDate,
    LotItemId: source?.lotItemId,
    LotItemOkeiName: source?.lotItemOkeiName,
    Name: source?.name,
    OkeiCode: source?.okeiCode,
    OperationType: source?.operationType === null ? undefined : apiParticipantOfferToTradeOperationTypeAltEnumAdapter(source?.operationType),
    OrganizerId: source?.organizerId,
    ParticipantOfferId: source?.participantOfferId,
    PriceListId: source?.priceListId,
    PublicationDate: source?.publicationDate,
    UnitPrice: source?.unitPrice,
    UnitPriceWithoutVat: source?.unitPriceWithoutVat,
  };
}
