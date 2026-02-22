import { ParticipantOfferStateEnum } from '../enums/participant-offer-state.enum';
import { StatusAggregationInfoAlt } from './status-aggregation-info-alt.interface';

// @ts-ignore
export interface MarketOfferStatusResult {
  name: ParticipantOfferStateEnum;
  statusInfo: StatusAggregationInfoAlt;
}
