/* tslint:disable */
/* eslint-disable */
import { ApiParticipantOfferSourceEnum } from '../models/api-participant-offer-source-enum';
export interface ApiTradeRecommendationDto {
  CurrencyCode?: string | null;
  CustomerExternalOrganizationId?: string | null;
  CustomerSource?: number | null;
  DeliveryKladrRegionName?: string | null;
  Id?: number;
  Name?: string | null;
  ParticipantExternalOrganizationId?: string | null;
  ParticipantOfferSource?: ApiParticipantOfferSourceEnum | null;
  Price?: number;
}
