/* tslint:disable */
/* eslint-disable */
import { ApiMarketParticipantOfferDto } from '../models/api-market-participant-offer-dto';
export interface ApiMarketPublishParticipantOfferDto {
  HasStockRemains?: boolean;
  OrganizationId?: number;
  ParticipantOfferDto?: ApiMarketParticipantOfferDto | null;
}
