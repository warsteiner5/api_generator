import { MarketJsonResultOfAcceptedPriceListsExtendedResult } from '../../models/market-json-result-of-accepted-price-lists-extended-result.interface';
import { ApiMarketJsonResultOfAcceptedPriceListsExtendedResult } from '../../../swagger/models/api-market-json-result-of-accepted-price-lists-extended-result';

export function adaptApiMarketJsonResultOfAcceptedPriceListsExtendedResult(source?: MarketJsonResultOfAcceptedPriceListsExtendedResult | null): ApiMarketJsonResultOfAcceptedPriceListsExtendedResult {
  return (source ?? {}) as ApiMarketJsonResultOfAcceptedPriceListsExtendedResult;
}
