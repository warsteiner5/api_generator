/* tslint:disable */
/* eslint-disable */
import { ApiParticipantOfferToTradeOperationTypeAltEnum } from '../models/api-participant-offer-to-trade-operation-type';
export interface ApiLinkOfferToLotItemDto {
  CreatedOn?: string;
  LastModificationDate?: string;
  LotItemId?: number;
  LotItemOkeiName?: string | null;
  Name?: string | null;
  OkeiCode?: string | null;
  OperationType?: ApiParticipantOfferToTradeOperationTypeAltEnum | null;
  OrganizerId?: number;
  ParticipantOfferId?: number;
  PriceListId?: number | null;
  PublicationDate?: string | null;
  UnitPrice?: number | null;
  UnitPriceWithoutVat?: number | null;
}
