import { ApiMarketOfferStatusResultDto } from '../../../swagger/models/api-market-offer-status-result-dto';
import { MarketOfferStatusResult } from '../../models/market-offer-status-result.interface';
import { participantOfferStateEnumAdapter } from '../enums/participant-offer-state-enum.adapter';
import { statusAggregationInfoAltAdapter } from './status-aggregation-info-alt.adapter';

export const marketOfferStatusResultAdapter = (source?: ApiMarketOfferStatusResultDto | null): MarketOfferStatusResult => {
  return {
    name: source?.Name === null ? undefined : participantOfferStateEnumAdapter(source?.Name),
    statusInfo: source?.StatusInfo === null ? undefined : statusAggregationInfoAltAdapter(source?.StatusInfo),
  };
}
