import { ApiMarketOfferDatesResultDto } from '../../../swagger/models/api-market-offer-dates-result-dto';
import { MarketOfferDatesResult } from '../../models/market-offer-dates-result.interface';
import { adaptMarketOfferStatusResultToUI } from './market-offer-status-result.adapter';

export function adaptMarketOfferDatesResultToUI(source?: ApiMarketOfferDatesResultDto | null): MarketOfferDatesResult {
  return {
    date: source?.Date ?? '',
    status: (source?.Status ?? []).map((item) => adaptMarketOfferStatusResultToUI(item)),
  };
}
