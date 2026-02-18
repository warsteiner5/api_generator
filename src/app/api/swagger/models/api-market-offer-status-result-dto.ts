/* tslint:disable */
/* eslint-disable */
import { ApiParticipantOfferStateEnum } from '../models/api-participant-offer-state-enum';
import { ApiStatusAggregationInfoAltDto } from '../models/api-status-aggregation-info';
export interface ApiMarketOfferStatusResultDto {
  Name?: ApiParticipantOfferStateEnum;
  StatusInfo?: ApiStatusAggregationInfoAltDto | null;
}
