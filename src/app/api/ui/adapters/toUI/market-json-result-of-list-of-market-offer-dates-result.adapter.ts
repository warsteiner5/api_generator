import { ApiMarketJsonResultOfListOfMarketOfferDatesResultDto } from '../../../swagger/models/api-market-json-result-of-list-of-market-offer-dates-result-dto';
import { MarketJsonResultOfListOfMarketOfferDatesResult } from '../../models/market-json-result-of-list-of-market-offer-dates-result.interface';

export function adaptMarketJsonResultOfListOfMarketOfferDatesResultToUI(source?: ApiMarketJsonResultOfListOfMarketOfferDatesResultDto | null): MarketJsonResultOfListOfMarketOfferDatesResult {
  return (source ?? {}) as MarketJsonResultOfListOfMarketOfferDatesResult;
}
