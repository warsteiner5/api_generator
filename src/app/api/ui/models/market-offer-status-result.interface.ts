import { ParticipantOfferStateEnum } from '../enums/participant-offer-state.enum';
import { StatusAggregationInfoAlt } from './status-aggregation-info-alt.interface';

export interface MarketOfferStatusResult {
  name: ParticipantOfferStateEnum;
  statusInfo: StatusAggregationInfoAlt;
}
