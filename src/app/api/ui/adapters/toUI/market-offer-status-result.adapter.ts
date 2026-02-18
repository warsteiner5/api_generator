import { ApiMarketOfferStatusResultDto } from '../../../swagger/models/api-market-offer-status-result-dto';
import { MarketOfferStatusResult } from '../../models/market-offer-status-result.interface';
import { adaptParticipantOfferStateEnumToUI } from './participant-offer-state-enum.adapter';
import { adaptStatusAggregationInfoAltToUI } from './status-aggregation-info-alt.adapter';

export function adaptMarketOfferStatusResultToUI(source?: ApiMarketOfferStatusResultDto | null): MarketOfferStatusResult {
  return {
    name: adaptParticipantOfferStateEnumToUI(source?.Name),
    statusInfo: adaptStatusAggregationInfoAltToUI(source?.StatusInfo),
  };
}
