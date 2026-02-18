import { ApiMarketJsonResultOfAcceptedPriceListsExtendedResult } from '../../../swagger/models/api-market-json-result-of-accepted-price-lists-extended-result';
import { MarketJsonResultOfAcceptedPriceListsExtendedResult } from '../../models/market-json-result-of-accepted-price-lists-extended-result.interface';

export function adaptMarketJsonResultOfAcceptedPriceListsExtendedResultToUI(source?: ApiMarketJsonResultOfAcceptedPriceListsExtendedResult | null): MarketJsonResultOfAcceptedPriceListsExtendedResult {
  return (source ?? {}) as MarketJsonResultOfAcceptedPriceListsExtendedResult;
}
