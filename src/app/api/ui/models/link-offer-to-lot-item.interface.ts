import { ParticipantOfferToTradeOperationTypeAltEnum } from '../enums/participant-offer-to-trade-operation-type-alt.enum';

// @ts-ignore
export interface LinkOfferToLotItem {
  createdOn: string;
  lastModificationDate: string;
  lotItemId: number;
  lotItemOkeiName: string;
  name: string;
  okeiCode: string;
  operationType: ParticipantOfferToTradeOperationTypeAltEnum;
  organizerId: number;
  participantOfferId: number;
  priceListId: number;
  publicationDate: string;
  unitPrice: number;
  unitPriceWithoutVat: number;
}
