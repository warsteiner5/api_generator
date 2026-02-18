import { LinkOfferToLotItem } from '../../models/link-offer-to-lot-item.interface';
import { ApiLinkOfferToLotItemDto } from '../../../swagger/models/api-link-offer-to-lot-item-dto';
import { adaptApiParticipantOfferToTradeOperationTypeAltEnum } from './api-participant-offer-to-trade-operation-type.adapter';

export function adaptApiLinkOfferToLotItemDto(source?: LinkOfferToLotItem | null): ApiLinkOfferToLotItemDto {
  return {
    CreatedOn: source?.createdOn,
    LastModificationDate: source?.lastModificationDate,
    LotItemId: source?.lotItemId,
    LotItemOkeiName: source?.lotItemOkeiName,
    Name: source?.name,
    OkeiCode: source?.okeiCode,
    OperationType: adaptApiParticipantOfferToTradeOperationTypeAltEnum(source?.operationType),
    OrganizerId: source?.organizerId,
    ParticipantOfferId: source?.participantOfferId,
    PriceListId: source?.priceListId,
    PublicationDate: source?.publicationDate,
    UnitPrice: source?.unitPrice,
    UnitPriceWithoutVat: source?.unitPriceWithoutVat,
  };
}
