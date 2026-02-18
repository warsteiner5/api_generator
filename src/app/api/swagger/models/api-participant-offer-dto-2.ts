/* tslint:disable */
/* eslint-disable */
import { ApiOkpd2MarketDto } from '../models/api-okpd-2-market-dto';
import { ApiParticipantOfferStateEnum } from '../models/api-participant-offer-state-enum';
export interface ApiParticipantOfferDto2 {
  Id?: number;
  ImageUrl?: string | null;
  OfferState?: ApiParticipantOfferStateEnum;
  OfferTerms?: string | null;
  OkeiCode?: string | null;
  OkeiDescription?: string | null;
  Okpd2Values?: Array<ApiOkpd2MarketDto> | null;
  ParticipantInn?: string | null;
  ParticipantKpp?: string | null;
  ProductName?: string | null;
  Quantity?: number | null;
  UnitPrice?: number | null;
}
