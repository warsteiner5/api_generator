import { MarketOfferStatusResult } from '../../models/market-offer-status-result.interface';
import { ApiMarketOfferStatusResultDto } from '../../../swagger/models/api-market-offer-status-result-dto';
import { apiParticipantOfferStateEnumAdapter } from '../enums/api-participant-offer-state-enum.adapter';
import { apiStatusAggregationInfoAltDtoAdapter } from './api-status-aggregation-info.adapter';

export const apiMarketOfferStatusResultDtoAdapter = (source?: MarketOfferStatusResult | null): ApiMarketOfferStatusResultDto => {
  return {
    Name: source?.name === null ? undefined : apiParticipantOfferStateEnumAdapter(source?.name),
    StatusInfo: source?.statusInfo === null ? undefined : apiStatusAggregationInfoAltDtoAdapter(source?.statusInfo),
  };
}
