import { ApiMarketOfferDatesResultDto } from '../../../swagger/models/api-market-offer-dates-result-dto';
import { MarketOfferDatesResult } from '../../models/market-offer-dates-result.interface';
import { marketOfferStatusResultAdapter } from './market-offer-status-result.adapter';

export const marketOfferDatesResultAdapter = (source?: ApiMarketOfferDatesResultDto | null): MarketOfferDatesResult => {
  return {
    date: source?.Date,
    status: source?.Status?.map((item) => marketOfferStatusResultAdapter(item)),
  };
}
