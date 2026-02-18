import { ApiMarketJsonResultOfListOfMarketOfferStatusResultDto } from '../../../swagger/models/api-market-json-result-of-list-of-market-offer-status-result-dto';
import { MarketJsonResultOfListOfMarketOfferStatusResult } from '../../models/market-json-result-of-list-of-market-offer-status-result.interface';

export function adaptMarketJsonResultOfListOfMarketOfferStatusResultToUI(source?: ApiMarketJsonResultOfListOfMarketOfferStatusResultDto | null): MarketJsonResultOfListOfMarketOfferStatusResult {
  return (source ?? {}) as MarketJsonResultOfListOfMarketOfferStatusResult;
}
