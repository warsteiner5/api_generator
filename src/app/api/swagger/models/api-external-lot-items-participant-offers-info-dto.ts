/* tslint:disable */
/* eslint-disable */
import { ApiExternalLinkOfferToLotItemDto } from '../models/api-external-link-offer-to-lot-item-dto';
export interface ApiExternalLotItemsParticipantOffersInfoDto {
  LotItemId?: number;
  LotItemName?: string | null;
  LotItemOrderNumber?: number;
  ParticipantOfferCount?: number;
  ParticipantOffers?: Array<ApiExternalLinkOfferToLotItemDto> | null;
}
