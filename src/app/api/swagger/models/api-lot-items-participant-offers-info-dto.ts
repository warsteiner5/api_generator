/* tslint:disable */
/* eslint-disable */
import { ApiLinkOfferToLotItemDto } from '../models/api-link-offer-to-lot-item-dto';
export interface ApiLotItemsParticipantOffersInfoDto {
  LotItemId?: number;
  LotItemName?: string | null;
  LotItemOrderNumber?: number;
  ParticipantOfferCount?: number;
  ParticipantOffers?: Array<ApiLinkOfferToLotItemDto> | null;
}
