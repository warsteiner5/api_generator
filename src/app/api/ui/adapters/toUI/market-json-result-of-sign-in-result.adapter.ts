import { ApiMarketJsonResultOfSignInResult } from '../../../swagger/models/api-market-json-result-of-sign-in-result';
import { MarketJsonResultOfSignInResult } from '../../models/market-json-result-of-sign-in-result.interface';

export function adaptMarketJsonResultOfSignInResultToUI(source?: ApiMarketJsonResultOfSignInResult | null): MarketJsonResultOfSignInResult {
  return (source ?? {}) as MarketJsonResultOfSignInResult;
}
