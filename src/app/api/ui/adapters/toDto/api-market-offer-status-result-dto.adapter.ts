import { MarketOfferStatusResult } from '../../models/market-offer-status-result.interface';
import { ApiMarketOfferStatusResultDto } from '../../../swagger/models/api-market-offer-status-result-dto';
import { adaptApiParticipantOfferStateEnum } from './api-participant-offer-state-enum.adapter';
import { adaptApiStatusAggregationInfoAltDto } from './api-status-aggregation-info.adapter';

export function adaptApiMarketOfferStatusResultDto(source?: MarketOfferStatusResult | null): ApiMarketOfferStatusResultDto {
  return {
    Name: adaptApiParticipantOfferStateEnum(source?.name),
    StatusInfo: adaptApiStatusAggregationInfoAltDto(source?.statusInfo),
  };
}
