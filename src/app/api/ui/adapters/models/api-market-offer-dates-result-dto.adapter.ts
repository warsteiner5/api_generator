import { MarketOfferDatesResult } from '../../models/market-offer-dates-result.interface';
import { ApiMarketOfferDatesResultDto } from '../../../swagger/models/api-market-offer-dates-result-dto';
import { apiMarketOfferStatusResultDtoAdapter } from './api-market-offer-status-result-dto.adapter';

export const apiMarketOfferDatesResultDtoAdapter = (source?: MarketOfferDatesResult | null): ApiMarketOfferDatesResultDto => {
  return {
    Date: source?.date,
    Status: source?.status?.map((item) => apiMarketOfferStatusResultDtoAdapter(item)),
  };
}
